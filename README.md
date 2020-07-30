This is example of connect Ctrader OpenApi v2.

This repository rewrite example https://github.com/spotware/connect-nodejs-samples because it use too low version of other lib and .proto file.

## 1. Lib requirement

Project use lib `protobufjs` to encode and decode proto message. No need any spotware lib.

## 2. Run example

1. update all .proto files in folder message-model by files .proto in repo https://github.com/spotware/Open-API-2.0-protobuf-messages

2. rename .env.dist -> .env and add you clientId, clientSecret, accountId, and accessToken. If you dont know how to get them, read https://connect.spotware.com/docs/open_api_2/getting_started_v2

3. Run

   ```
   npm i
   ```

   ```
   npm start
   ```

## 3. Reference

read src/index.ts

methods:

### new CtraderApiConnect({host: string, port: string}):

for demo account,

```
{
  host: 'demo.ctraderapi.com',
  port: 5035,
}
```

and trade account

```
{
    host: 'live.ctraderapi.com',
    port: 5035,
}
```

check in https://connect.spotware.com/docs/open_api_2/proxy_cloud_v2 if it change

### send(type: string, payload: Object) : Promise<response_payload>

type: name of request, find in https://connect.spotware.com/docs/open_api_2/protobuf_messages_reference_v2/open_api_messages and https://connect.spotware.com/docs/open_api_2/protobuf_messages_reference_v2/open_api_common_messages. Example: "ProtoOAApplicationAuthReq", "ProtoOAVersionReq"

payload: Object payload of request type

response_payload format:

```typescript
{
  payload: Object;
  payloadType: number;
  payloadTypeName: string;
  clientMsgId: null | string;
}
```

Example

```javascript
// req: ProtoOAApplicationAuthReq
const connector = new CtraderApiConnect({
  host: 'demo.ctraderapi.com',
  port: 5035,
});
const payload = {
    clientId: "MY_CLIENT_ID",
    clientSecret; "MY_CLIENT_SECRET"
}
connector.send('ProtoOAApplicationAuthReq', payload).then(rs => {
    if (rs.payloadTypeName == 'ProtoOAErrorRes') {
      console.log('error', rs);
    }
    return connector.send('ProtoOAAccountAuthReq', {
      ctidTraderAccountId: params.accountId,
      accessToken: params.accessToken,
    });
})
```

### on(type: string, callback: (payload) => {})

Listen on event

Example

```typescript
// after authen

connector.send('ProtoOASubscribeSpotsReq', {
  ctidTraderAccountId: 'YOUR_ACCOUNT_ID',
  symbolId: 3,
});
connector.on('ProtoOASpotEvent', rs => {
  console.log(rs);
});
```
