import { OrganizationProps } from '@skeptools/skep-core';
import { TestIntegrations } from '../../default_stack.test';

export const organization: OrganizationProps<TestIntegrations> = {
  name: 'Test',
  integrations: {
    github: {
      rootTeams: ['guild', 'team'],
    },
  },
};
