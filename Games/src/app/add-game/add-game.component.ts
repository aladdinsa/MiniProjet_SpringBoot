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
  genres: Genre[];
  newIdGen: number;
  newGenre: Genre;
  msg: string;
  constructor(private gameService: GameService, private router: Router) { }

  ngOnInit() {
  }
  addGame() {
    this.gameService.ajouterGame(this.newGame).subscribe(game => {
      console.log(game);

    });

    this.router.navigate(['games']).then(() => {
      window.location.reload();
    });
  }

}
