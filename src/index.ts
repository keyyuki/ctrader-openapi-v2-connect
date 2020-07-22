import * as getenv from 'dotenv';
getenv.config();
import { CtraderOpenApiService } from './service/CtraderopenApiService';

const params = {
  host: 'demo.ctraderapi.com',
  port: 5035,
  clientId: process.env.CLIENT_ID || '',
  clientSecret: process.env.CLIENT_SECRET || '',
  accountId: +(process.env.ACCOUNT_ID || 0),
  accessToken: process.env.ACCESS_TOKEN || '',
};
const service = new CtraderOpenApiService(params);
/*
service.send('ProtoOASubscribeSpotsReq', {
  ctidTraderAccountId: service.accountId,
  symbolId: 3,
});

service.on('ProtoOASpotEvent', rs => {
  console.log(rs);
});
*/

async function factory() {
  console.log('aaaa');
  await service.auth().catch(err => console.log(err));
  console.log('bbb');

  service
    .send('ProtoOADealListReq', {
      ctidTraderAccountId: service.accountId,
      toTimestamp: Date.now(),
      fromTimestamp: Date.now() - 24 * 60 * 60 * 1000,
      maxRows: 5,
    })
    .then(rs => {
      console.log('open position', rs.payload);
    })
    .catch(err => {
      console.log('error on tick', err);
    });
}
factory();
