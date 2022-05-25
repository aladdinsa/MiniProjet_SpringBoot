import { Component, OnInit } from '@angular/core';
import { Game } from '../model/game.model';
import { GameService } from '../services/game.service';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {
  games: Game[];
  constructor(private gameService: GameService, public authService: AuthService) {
    this.games = gameService.listeGames();
  }
  ngOnInit(): void {
  }
  supprimerGame(game: Game) {
    let conf = confirm("Are you sure ?");
    if (conf) {
      this.gameService.supprimerGame(game);
    }
  }

}
