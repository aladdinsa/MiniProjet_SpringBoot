import { Injectable } from '@angular/core';
import { Game } from '../model/game.model';
import { Genre } from '../model/genre.model';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  games: Game[];
  game: Game;
  genres: Genre[];
  genre = new Genre();
  GameSearch: Game[];
  constructor() {
    this.genres = [
      { idGen: 1, nameGen: "ACTION" }, { idGen: 2, nameGen: "HORROR" },
      { idGen: 3, nameGen: "RACING" }, { idGen: 4, nameGen: "RPG" },
      { idGen: 5, nameGen: "SPORT" }, { idGen: 6, nameGen: "ADVENTURE" },
      { idGen: 7, nameGen: "SHOOTER" }
    ];
    this.games = [
      { idGame: 1, name: "Red Dead Redemption 2", developers: "Rockstar Games", price: 59.99, creationDate: new Date("10/26/2018"), category: { idGen: 1, nameGen: "ACTION" } },
      { idGame: 2, name: "Grand Theft Auto 5", developers: "Rockstar Games", price: 39.99, creationDate: new Date("09/17/2013"), category: { idGen: 1, nameGen: "ACTION" } },
      { idGame: 3, name: "Resident Evil 4", developers: "Capcom", price: 23.33, creationDate: new Date("01/11/2005"), category: { idGen: 2, nameGen: "HORROR" } },
      { idGame: 4, name: "Assassin's Creed 2", developers: "Ubisoft", price: 14.99, creationDate: new Date("11/17/2009"), category: { idGen: 6, nameGen: "ADVENTURE" } }
    ];
  }
  listeGames(): Game[] {
    return this.games;
  }
  ajouterGame(game: Game) {
    this.games.push(game);
  }
  supprimerGame(game: Game) {
    const index = this.games.indexOf(game, 0);
    if (index > -1) {
      this.games.splice(index, 1);
    }
  }
  consulterGame(id: number): Game {
    this.game = this.games.find(p => p.idGame == id);
    return this.game;
  }
  trierGames() {
    this.games = this.games.sort((n1, n2) => {
      if (n1.idGame > n2.idGame) {
        return 1;
      }
      if (n1.idGame < n2.idGame) {
        return -1;
      }
      return 0;
    });
  }
  updateProduit(game: Game) {
    this.supprimerGame(game);
    this.ajouterGame(game);
    this.trierGames();
  }
  listeGenres(): Genre[] {
    return this.genres;
  }
  consulterCategorie(id: number): Genre {
    this.genre = this.genres.find(gen => gen.idGen == id);
    return this.genre;
  }
  searchByGenre(idGen: number): Game[] {
    this.GameSearch = [];
    this.games.forEach((cur, index) => {
      if (idGen == cur.category.idGen) {
        console.log("cur " + cur);
        this.GameSearch.push(cur);
      }
    });
    return this.GameSearch;
  }
}