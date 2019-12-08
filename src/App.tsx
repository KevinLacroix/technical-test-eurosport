import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { URL_API_PLAYERS as url } from './configurations/constants';
import { Player } from './components/Player';
import './App.scss';

const App: React.FC = () => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    fetchPlayers();
  }, []);

  const fetchPlayers = () => {
    axios
      .get(url)
      .then(response => {
        setPlayers(response.data.players);
      })
      .catch(err => {
        console.log('err', err);
      });
  };

  return (
    <div className="App">
      <h1 className="App__title">Test Eurosport</h1>
      {players.length > 0 && (
        <div className="App__players">
          {players.map((player: any, index: number) => (
            <Player
              key={`${player.shortname}-${index}`}
              firstname={player.firstname}
              lastname={player.lastname}
              flag={player.country.picture}
              countryCode={player.country.code}
              picture={player.picture}
              rank={player.data.rank}
              weight={player.data.weight}
              height={player.data.height}
              age={player.data.age}
              lastgames={player.data.last}
              className="App__player"
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default App;
