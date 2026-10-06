import { Redis as UpstashRedis } from '@upstash/redis';
import Redis from 'ioredis';
import { appConfig } from './config';

interface CacheClient {
  get(key: string): Promise<string | null>;
  set(key: string, value: string, exSeconds?: number): Promise<void>;
  del(key: string): Promise<void>;
}

class UpstashAdapter implements CacheClient {
  private client: UpstashRedis;

  constructor() {
    this.client = new UpstashRedis({
      url: appConfig.redis.upstashRestUrl!,
      token: appConfig.redis.upstashRestToken!,
    });
  }

  async get(key: string): Promise<string | null> {
    const val = await this.client.get(key);
    return typeof val === 'string' ? val : val ? JSON.stringify(val) : null;
  }

  async set(key: string, value: string, exSeconds?: number): Promise<void> {
    if (exSeconds) {
      await this.client.set(key, value, { ex: exSeconds });
    } else {
      await this.client.set(key, value);
    }
  }

  async del(key: string): Promise<void> {
    await this.client.del(key);
  }
}

class LocalRedisAdapter implements CacheClient {
  private client: Redis | null = null;

  private getClient(): Redis {
    if (!this.client) {
      this.client = new Redis(appConfig.redis.localUrl, {
        lazyConnect: true,
        maxRetriesPerRequest: 1,
      });
    }
    return this.client;
  }

  async get(key: string): Promise<string | null> {
    const redis = this.getClient();
    if (redis.status === 'wait') await redis.connect().catch(() => null);
    return redis.get(key).catch(() => null);
  }

  async set(key: string, value: string, exSeconds?: number): Promise<void> {
    const redis = this.getClient();
    if (redis.status === 'wait') await redis.connect().catch(() => null);
    if (exSeconds) {
      await redis.set(key, value, 'EX', exSeconds).catch(() => null);
    } else {
      await redis.set(key, value).catch(() => null);
    }
  }

  async del(key: string): Promise<void> {
    const redis = this.getClient();
    if (redis.status === 'wait') await redis.connect().catch(() => null);
    await redis.del(key).catch(() => null);
  }
}

export const cacheClient: CacheClient = appConfig.redis.useUpstash
  ? new UpstashAdapter()
  : new LocalRedisAdapter();
