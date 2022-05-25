import { Component, OnInit } from '@angular/core';
import { Game } from '../model/game.model';
import { GameService } from '../services/game.service';
import { Router } from '@angular/router';
import { Genre } from '../model/genre.model';

@Component({
  selector: 'app-add-game',
  templateUrl: './add-game.component.html',
  styleUrls: ['./add-game.component.css']
})
export class AddGameComponent implements OnInit {
  newGame = new Game();
  genres : Genre[];
  newIdGen : number;
  newGenre : Genre;
  msg : string;
  constructor(private gameService: GameService, private router :Router) {}
  addGame(){
    // this.gameService.ajouterGame(this.newGame);
    // this.router.navigate(['games']);
    this.newGenre = this.gameService.consulterCategorie(this.newIdGen);
    this.newGame.category = this.newGenre;
    this.gameService.ajouterGame(this.newGame);
    this.msg = this.newGame.name+" added successfully"

  }

  ngOnInit() {
    this.genres = this.gameService.listeGenres();
  }

}
