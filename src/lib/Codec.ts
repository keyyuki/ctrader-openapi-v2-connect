import * as ProtoBuf from 'protobufjs';

interface CodecInterface {
  messageModels: Record<string, ProtoBuf.Type>;
  enums: Record<string, ProtoBuf.Enum>;

  firstLevelMessageModel?: ProtoBuf.Type;
  payloadTypeToMesageNameMap: Record<number, string>;

  loadFromFiles(files: Array<string>): Promise<void>;

  getPayloadTypeByName(name: string): number;
  getNameByPayloadType(payloadType: number): string;
  encode(
    messageName: string,
    payload?: Record<string, any>,
    clientMsgId?: string,
  ): Uint8Array;

  decode(
    message: Uint8Array,
  ): {
    payloadType: number;
    messageName: string;
    payload: Record<string, any>;
    clientMsgId: string | null;
  };
}

export class Codec implements CodecInterface {
  messageModels: Record<string, ProtoBuf.Type> = {};
  enums: Record<string, ProtoBuf.Enum> = {};
  payloadTypeToMesageNameMap: Record<number, string> = {};

  firstLevelMessageModel?: ProtoBuf.Type;

  loadFromFiles = (files: Array<string>): Promise<void> => {
    return Promise.all(
      files.map(filename =>
        ProtoBuf.load(filename).then(root => {
          return this.traverseTypes(root);
        }),
      ),
    ).then(() => {
      return this.build();
    });
  };
  traverseTypes = (current: any): void => {
    if (current instanceof ProtoBuf.Type) {
      this.messageModels[current.name] = current;
    }
    if (current instanceof ProtoBuf.Enum) {
      this.enums[current.name] = current;
    }
    if (current.nestedArray != undefined) {
      current.nestedArray.forEach((nested: any) => {
        this.traverseTypes(nested);
      });
    }
  };

  build = () => {
    // validate model data
    if (!this.enums['ProtoOAPayloadType']) {
      throw 'Miss ProtoOAPayloadType, a backbone enum';
    }
    if (!this.messageModels['ProtoMessage']) {
      throw 'Miss ProtoMessage, a backbone message';
    }

    // build firstLevelMessageModel
    this.firstLevelMessageModel = this.messageModels['ProtoMessage'];

    // build payloadTypeToMesageNameMap
    const payloadTypes = {
      ...this.enums['ProtoOAPayloadType'].values,
      ...this.enums['ProtoPayloadType'].values,
    };

    for (const messageName of Object.keys(this.messageModels)) {
      const model = this.messageModels[messageName];
      const modelPayloadType =
        model.fields.payloadType?.getOption('default') || '';
      if (modelPayloadType && modelPayloadType in payloadTypes) {
        this.payloadTypeToMesageNameMap[
          payloadTypes[modelPayloadType]
        ] = messageName;
      }
    }
    //console.log(payloadTypes);
    //console.log(this.payloadTypeToMesageNameMap);
  };

  getPayloadTypeByName = (name: string): number => {
    for (const type in this.payloadTypeToMesageNameMap) {
      if (
        Object.prototype.hasOwnProperty.call(
          this.payloadTypeToMesageNameMap,
          type,
        )
      ) {
        const messageName = this.payloadTypeToMesageNameMap[type];
        if (messageName == name) {
          return +type;
        }
      }
    }
    return 0;
  };

  getNameByPayloadType = (payloadType: number): string => {
    return this.payloadTypeToMesageNameMap[payloadType] || '';
  };

  encode = (
    messageName: string,
    payload?: Record<string, any>,
    clientMsgId?: string,
  ): Uint8Array => {
    if (!this.firstLevelMessageModel) {
      throw 'model does not load';
    }
    // find mesageModel by messagename
    if (typeof this.messageModels[messageName] == 'undefined') {
      throw 'message not found';
    }
    const model = this.messageModels[messageName];
    let message = {
      payloadType: this.getPayloadTypeByName(messageName),
    };

    if (payload) {
      message = {
        ...payload,
        ...message,
      };
    }

    console.log(message);
    const secondLevelMessage = model.create(message);

    const result = this.firstLevelMessageModel.create({
      payloadType: this.getPayloadTypeByName(messageName),
      payload: model.encode(secondLevelMessage).finish(),
      clientMsgId,
    });

    return this.firstLevelMessageModel.encode(result).finish();
  };

  decode = (
    message: Uint8Array,
  ): {
    payloadType: number;
    messageName: string;
    payload: Record<string, any>;
    clientMsgId: string | null;
  } => {
    if (!this.firstLevelMessageModel) {
      throw 'model does load';
    }
    let firstLvMessage: Record<string, any> = {};
    try {
      firstLvMessage = this.firstLevelMessageModel.decode(message);
    } catch (error) {
      for (const key in this.messageModels) {
        if (Object.prototype.hasOwnProperty.call(this.messageModels, key)) {
          const model = this.messageModels[key];
          try {
            firstLvMessage = model.decode(message);
            console.log(key, firstLvMessage);
            break;
          } catch (error) {
            continue;
          }
        }
      }
    }

    if (!('payload' in firstLvMessage) || !('payloadType' in firstLvMessage)) {
      throw 'response message invalid';
    }
    let clientMsgId = null;
    if ('clientMsgId' in firstLvMessage) {
      clientMsgId = firstLvMessage['clientMsgId'];
    }
    const payloadType = +firstLvMessage['payloadType'];
    const encodedSecondLvMessage = firstLvMessage['payload'];
    const modelName = this.payloadTypeToMesageNameMap[payloadType];
    if (!modelName) {
      throw 'Payloadtype ' + payloadType + ' not found';
    }
    const model = this.messageModels[modelName];
    const secondLvmessage = model.decode(encodedSecondLvMessage);
    return {
      payloadType: payloadType,
      messageName: modelName,
      payload: secondLvmessage.toJSON(),
      clientMsgId,
    };
  };
}
