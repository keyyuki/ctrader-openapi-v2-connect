import { Reader } from 'protobufjs';

export const decodeRaw = (buffer: Uint8Array): Array<any> => {
  const reader = Reader.create(buffer);
  const out = [];
  while (reader.pos < reader.len) {
    const tag = reader.uint64();
    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore
    const id = tag >>> 3;
    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore
    const wireType = tag & 7;
    switch (wireType) {
      case 0: // int32, int64, uint32, bool, enum, etc
        out.push({ [id]: reader.uint32() });
        break;
      case 1: // fixed64, sfixed64, double
        out.push({ [id]: reader.fixed64() });
        break;
      case 2: // string, bytes, sub-message
        const bytes = reader.bytes();
        // TODO: this isn't the right way to do this at all, I'm sure
        if (bytes[0] === 8) {
          out.push({ [id]: decodeRaw(bytes) });
        } else {
          out.push({ [id]: bytes.toString() });
        }
        break;
      // IGNORE start_group
      // IGNORE end_group
      case 5: // fixed32, sfixed32, float
        out.push({ [id]: reader.float() });
        break;
      default:
        reader.skipType(wireType);
    }
  }
  return out;
};
