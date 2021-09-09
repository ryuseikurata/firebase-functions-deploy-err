import * as admin from 'firebase-admin';
import { config } from './config';
export * as v1 from './routes/v1';

  admin.initializeApp({
    /*credential: admin.credential.cert(
      JSON.parse(JSON.stringify(service_account))
    ),*/
    credential: admin.credential.cert(JSON.parse(JSON.stringify(config.service_account).replace(/\\\\n/g, '\\n'))),
    databaseURL: config.admin.database_url,
  });
  /**
   * https://stackoverflow.com/questions/61969722/how-to-enable-ignoreundefinedproperties-in-node-js
   * undefinedでerrorになるけど、undefinedあっても無視する
   */
  admin.firestore().settings({ ignoreUndefinedProperties: true });
