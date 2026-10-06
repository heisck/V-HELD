import { createClient } from '@libsql/client';
import { appConfig } from './config';

export const dbClient = createClient({
  url: appConfig.db.url,
  authToken: appConfig.db.authToken,
});
