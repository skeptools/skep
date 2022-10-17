import { App } from 'cdktf';
import { DefaultStack, Integrations } from '../../src';
import { organization } from './config/organization';
import * as people from './config/people';
import * as teams from './config/teams';


export type PeopleKeys = Extract<keyof typeof people, string>;
export type TeamKeys = Extract<keyof typeof teams, string>;
export type TestIntegrations = Integrations<PeopleKeys>;

test('DefaultStack', () => {
  const app = new App();
  new DefaultStack<PeopleKeys, TeamKeys>(app, 'test-skep-stack', organization, people, teams);
  app.synth();
});
