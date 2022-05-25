import { Component, OnInit } from '@angular/core';
import { Genre } from '../model/genre.model';
import { Game } from '../model/game.model';
import { GameService } from '../services/game.service';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-search-by-genre',
  templateUrl: './search-by-genre.component.html',
  styleUrls: ['./search-by-genre.component.css']
})
export class SearchByGenreComponent implements OnInit {
  games: Game[];
  genres: Genre[];
  IdCategorie: number;
  constructor(private gameService: GameService, public authService: AuthService ) { }

  ngOnInit(): void {
    this.genres = this.gameService.listeGenres();
    this.games = [];
  }
  onChange() {
    this.games = this.gameService.searchByGenre(this.IdCategorie);
  }

}
