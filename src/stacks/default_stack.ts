import { Factory as GitHubFactory } from '@skeptools/plugin-github';
import { OrganizationProps, PersonProps, SkepStack, TeamProps } from '@skeptools/skep-core';
import { RoleType } from '../role_types';
import { TeamType } from '../team_types';

export interface Integrations<PeopleKeys extends string> {
  readonly github: GitHubFactory<PeopleKeys, TeamType, RoleType>;
}

export class DefaultStack<
  PeopleKeys extends string,
  TeamKeys extends string
> extends SkepStack<
  Integrations<PeopleKeys>,
  PeopleKeys,
  TeamKeys,
  TeamType,
  RoleType
  > {
  get defaultConfig() {
    return {
      team: {
        type: 'team' as TeamType,
      },
    };
  }

  load(
    orgConfig: OrganizationProps<Integrations<PeopleKeys>>,
    peopleConfig: Record<PeopleKeys, PersonProps<Integrations<PeopleKeys>, RoleType>>,
    teamConfig: Record<TeamKeys, TeamProps<Integrations<PeopleKeys>, PeopleKeys, TeamType>>,
  ): Integrations<PeopleKeys> {
    const github = new GitHubFactory<PeopleKeys, TeamType, RoleType>(
      this,
      'github',
      this.getOrganizationConfig(orgConfig, 'github'),
      this.getPersonConfig(peopleConfig, 'github'),
      this.getTeamConfig(teamConfig, 'github'),
    );
    github.load();
    return { github };
  }
}
