import { TeamProps } from '@skeptools/skep-core';
import { TeamType } from '../../../../src';
import { PeopleKeys, TestIntegrations } from '../../default_stack.test';

export const fooTeam = {
  name: 'Foo',
  leads: ['fooBar'],
  members: ['balBaz'],
  integrations: {
    github: {},
  },
} as TeamProps<TestIntegrations, PeopleKeys, TeamType>;
