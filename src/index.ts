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

async function factory() {
  console.log('start auth');
  await service.auth().catch(err => console.log(err));
  console.log('end auth');

  service
    .send('ProtoOAGetAccountListByAccessTokenReq', {
      accessToken: service.accessToken,
    })
    .then(rs => {
      console.log('account', rs.payload);
      return;
    })
    .catch(err => {
      console.log('error', err);
    });

  // subscribe spot event
  service
    .send('ProtoOASubscribeSpotsReq', {
      ctidTraderAccountId: service.accountId,
      symbolId: [3],
    })
    .then(rs => {
      console.log('response ProtoOASubscribeSpotsReq', rs);
    });

  // listen event spot
  service.on('ProtoOASpotEvent', (message: any) => {
    console.log('Event ProtoOASpotEvent', message);
  });

  // heartbeat
  service.on('ProtoHeartbeatEvent', (message: any) => {
    console.log('heartbeat', message);
    service.send('ProtoHeartbeatEvent', {});
  });
}
factory();
