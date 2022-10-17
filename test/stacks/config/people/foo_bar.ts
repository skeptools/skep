import { PersonProps } from '@skeptools/skep-core';
import { RoleType } from '../../../../src';
import { TestIntegrations } from '../../default_stack.test';

export const fooBar = {
  firstName: 'Foo',
  lastName: 'Bar',
  emailAddress: 'foo.bar@example.com',
  role: 'engineering',
  integrations: {
    github: {
      admin: true,
      username: 'foo.bar',
    },
  },
} as PersonProps<TestIntegrations, RoleType>;
