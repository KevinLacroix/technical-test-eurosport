export interface IPlayer {
  id: number;
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
}

export class Player implements IPlayer {
  id: number;
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

  constructor(id: number) {
    this.id = id;
    this.firstname = '';
    this.lastname = '';
    this.flag = '';
    this.countryCode = '';
    this.picture = '';
    this.rank = 0;
    this.weight = 0;
    this.height = 0;
    this.age = 0;
    this.lastgames = [];
  }
}
