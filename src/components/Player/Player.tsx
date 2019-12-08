import React from 'react';
import classnames from 'classnames';
import { countryCodes } from './../../configurations/countryCodes';
import { formatWeight, formatHeight } from './../../utils';
import './Player.scss';

export interface IPlayerProps {
  firstname: string;
  lastname: string;
  flag: string;
  countryCode: string;
  picture: string;
  rank: number;
  weight: number;
  height: number;
  age: number;
  lastgames: number[];
  className: string;
}

export const Player: React.FC<IPlayerProps> = props => {
  const country = countryCodes[`${props.countryCode.toLowerCase()}`];
  const nbVictory = props.lastgames.filter(game => game === 1).length;
  const nbDefeat = props.lastgames.filter(game => game === 0).length;

  return (
    <article className={classnames('Player', props.className)}>
      <header className="Player__header">
        <div className="Player__picture">
          <img
            src={props.picture}
            alt={`${props.firstname} ${props.lastname}`}
            className="Player__img"
          />
        </div>
        <h3 className="Player__name">
          {props.firstname} {props.lastname}
        </h3>
        <div className="Player__origin">
          <img src={props.flag} alt={country} className="Player__imgFlag" />
          <div className="Player__country">{country}</div>
        </div>
      </header>
      <div className="Player__body">
        <ul className="Player__listDetails">
          <li className="Player__detail">
            <span className="Player__detailLabel">Poids (Kg)</span>
            <span className="Player__detailValue">
              {formatWeight(props.weight)}
            </span>
          </li>
          <li className="Player__detail">
            <span className="Player__detailLabel">Taille</span>
            <span className="Player__detailValue">
              {formatHeight(props.height)}m
            </span>
          </li>
          <li className="Player__detail">
            <span className="Player__detailLabel">Age</span>
            <span className="Player__detailValue">{props.age}</span>
          </li>
          <li className="Player__detail">
            <span className="Player__detailLabel">Classement</span>
            <span className="Player__detailValue Player__detailValue--lg">
              {props.rank}
            </span>
          </li>
        </ul>
        <div>Nombre de victoires: {nbVictory}</div>
        <div>Nombre de défaites: {nbDefeat}</div>
      </div>
    </article>
  );
};
