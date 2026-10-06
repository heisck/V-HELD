import { describe, it, expect } from 'vitest';
import { appConfig } from './config';
import { uploadMedia } from './storage';

describe('Development Environment Shielding', () => {
  it('defaults to dev configuration and shields cloud providers', async () => {
    expect(appConfig.isDev).toBe(true);
    expect(appConfig.redis.useUpstash).toBe(false);
    expect(appConfig.sentry.enabled).toBe(false);
    expect(appConfig.storage.driver).toBe('local');

    const result = await uploadMedia(Buffer.from('test'), 'avatar.png');
    expect(result.url).toBe('/uploads/avatar.png');
    expect(result.publicId).toBe('dev_local_avatar.png');
  });

  it('binds database and redis endpoints to localhost strictly', () => {
    expect(appConfig.db.url).toContain('127.0.0.1');
    expect(appConfig.redis.localUrl).toContain('127.0.0.1');
  });
});
