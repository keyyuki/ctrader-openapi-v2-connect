import * as getenv from 'dotenv';
getenv.config();
import { CtraderApiConnect } from './lib/CtraderApiConnect';

const params = {
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  accountId: process.env.ACCOUNT_ID,
  accessToken: process.env.ACCESS_TOKEN,
};
const connector = new CtraderApiConnect({
  host: 'demo.ctraderapi.com',
  port: 5035,
});

connector
  .send('ProtoOAApplicationAuthReq', {
    clientId: params.clientId,
    clientSecret: params.clientSecret,
  })
  .then(rs => {
    if (rs.payloadTypeName == 'ProtoOAErrorRes') {
      console.log('error', rs);
    }
    return connector.send('ProtoOAAccountAuthReq', {
      ctidTraderAccountId: params.accountId,
      accessToken: params.accessToken,
    });
  })
  .then(rs => {
    if (rs.payloadTypeName == 'ProtoOAErrorRes') {
      console.log('error', rs);
    }
    connector.send('ProtoOASubscribeSpotsReq', {
      ctidTraderAccountId: params.accountId,
      //accessToken: params.accessToken,
      symbolId: 3,
    });
  });

connector.on('ProtoOASpotEvent', rs => {
  console.log(rs);
});
