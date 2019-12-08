import React from 'react';
import { mount, ReactWrapper, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Player as PlayerModel } from './../../models/Player';
import { Player as PlayerComponent } from './../../components/Player';

configure({ adapter: new Adapter() });

let player: PlayerModel;
let Player: ReactWrapper;

beforeEach(() => {
  player = {
    id: 1,
    firstname: 'Stan',
    lastname: 'Wawrinka',
    flag: 'https://i.eurosport.com/_iss_/geo/country/flag/large/2213.png',
    countryCode: 'SUI',
    picture:
      'https://i.eurosport.com/_iss_/person/pp_clubteam/large/325225.jpg',
    rank: 21,
    weight: 81000,
    height: 183,
    age: 33,
    lastgames: [1, 1, 1, 0, 1]
  };
});

afterEach(() => {
  Player.unmount();
});

describe('Player Component', () => {
  test('render', () => {
    Player = mount(
      <PlayerComponent
        firstname={player.firstname}
        lastname={player.lastname}
        flag={player.flag}
        countryCode={player.countryCode}
        picture={player.picture}
        rank={player.rank}
        weight={player.weight}
        height={player.height}
        age={player.age}
        lastgames={player.lastgames}
        className="player-test"
      />
    );

    expect(Player).toMatchSnapshot();
  });
});
