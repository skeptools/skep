import { TeamProps } from '@skeptools/skep-core';
import { TeamType } from '../../../../src';
import { PeopleKeys, TestIntegrations } from '../../default_stack.test';

export const barGuild = {
  name: 'Bar',
  leads: ['fooBar'],
  members: ['balBaz'],
  integrations: {
    github: {},
  },
  type: 'guild',
} as TeamProps<TestIntegrations, PeopleKeys, TeamType>;
