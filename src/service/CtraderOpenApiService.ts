import { CtraderApiConnect } from '../lib/CtraderApiConnect';

type CtraderOpenApiServiceParams = {
  host: string;
  port: number;
  clientId: string;
  clientSecret: string;
  accountId: number;
  accessToken: string;
};
export class CtraderOpenApiService {
  connector: CtraderApiConnect;
  clientId: string;
  clientSecret: string;
  accountId: number;
  accessToken: string;
  constructor(params: CtraderOpenApiServiceParams) {
    this.connector = new CtraderApiConnect({
      host: params.host,
      port: params.port,
    });
    this.clientId = params.clientId;
    this.clientSecret = params.clientSecret;
    this.accessToken = params.accessToken;
    this.accountId = params.accountId;
  }

  auth = async (): Promise<boolean> => {
    console.log('send 1');
    const applicationAuthRes = await this.connector.send(
      'ProtoOAApplicationAuthReq',
      {
        clientId: this.clientId,
        clientSecret: this.clientSecret,
      },
    );

    if (applicationAuthRes.payloadTypeName == 'ProtoOAErrorRes') {
      throw 'application authen failed';
    }

    console.log('send 2');
    const accountAuthRes = await this.connector.send('ProtoOAAccountAuthReq', {
      ctidTraderAccountId: this.accountId,
      accessToken: this.accessToken,
    });

    if (accountAuthRes.payloadTypeName == 'ProtoOAErrorRes') {
      throw 'account authen failed';
    }

    return true;
  };

  on = (type: string, data: any): void => {
    this.connector.on(type, data);
  };

  send = (type: string, data: any): Promise<any> => {
    return this.connector.send(type, data);
  };
}
