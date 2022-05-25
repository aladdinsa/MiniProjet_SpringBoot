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

  ngOnInit(): void {
    this.gameService.consulterGame(this.activatedRoute.snapshot.params.id).
    subscribe( prod =>{ this.currentGame = prod; });
  }
  updateGame() {
    this.gameService.updateGame(this.currentGame).subscribe(() => {
    this.router.navigate(['produits']);
    },(error) => { alert("Problème lors de la modification !"); }
    );
    }

}
