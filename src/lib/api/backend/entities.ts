import { BaseEntity } from '@/lib/api/backend';

export type User = BaseEntity & {
  username: string;
};
