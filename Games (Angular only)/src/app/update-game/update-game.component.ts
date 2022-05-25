import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GameService } from '../services/game.service';
import { Game } from '../model/game.model';
import { Genre } from '../model/genre.model';

@Component({
  selector: 'app-update-game',
  templateUrl: './update-game.component.html',
  styleUrls: ['./update-game.component.css']
})
export class UpdateGameComponent implements OnInit {
  currentGame = new Game();
  genres: Genre[];
  updatedGenre: Genre;
  constructor(private activatedRoute: ActivatedRoute, private router: Router, private gameService: GameService) { }

  ngOnInit() {
    // this.currentGame = this.gameService.consulterGame(this.activatedRoute.snapshot.params.id);
    // console.log(this.currentGame);
    this.genres = this.gameService.listeGenres();
    this.currentGame = this.gameService.consulterGame(this.activatedRoute.snapshot.params.id);
  }
  updateGame() {
    // this.gameService.updateProduit(this.currentGame);
    // this.router.navigate(['games']);
    this.updatedGenre = this.gameService.consulterCategorie(this.currentGame.category.idGen);
    this.currentGame.category = this.updatedGenre;
    this.gameService.updateProduit(this.currentGame);
    this.router.navigate(['games']);
  }

}
