import { Component, OnInit } from '@angular/core';
import { Game } from '../model/game.model';
import { GameService } from '../services/game.service';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {
  games: Game[];
  currentRate: number = 3;
  constructor(private gameService: GameService, private router: Router, public authService: AuthService) { }
  ngOnInit(): void {
    this.gameService.listeGames().subscribe(games => {
      console.log(games);
      this.games = games;
    });
  }
  supprimerGame(p: Game) {
    let conf = confirm("Are you sure ?");
    if (conf)
      this.gameService.supprimerGame(p.id_game).subscribe(() => {
        console.log("game deleted");
        this.SuprimerGameDuTableau(p);
      });
  }
  SuprimerGameDuTableau(game: Game) {
    this.games.forEach((cur, index) => {
      if (game.id_game === cur.id_game) {
        this.games.splice(index, 1);
      }
    });
  }

}
