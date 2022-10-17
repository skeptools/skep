import { PersonProps } from '@skeptools/skep-core';
import { RoleType } from '../../../../src';
import { TestIntegrations } from '../../default_stack.test';

export const balBaz = {
  firstName: 'Bal',
  lastName: 'Baz',
  emailAddress: 'bal.baz@example.com',
  role: 'product',
  integrations: {
    github: {
      username: 'bal.baz',
    },
  },
} as PersonProps<TestIntegrations, RoleType>;
