import { config } from './../../config';
import * as functions from 'firebase-functions';

export const func = functions.https.onRequest(async (req, res) => {
  console.log(config)
  console.log(config.general.domain)
  res.sendStatus(200);
});
