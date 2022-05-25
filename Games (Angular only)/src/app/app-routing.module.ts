import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GamesComponent } from './games/games.component';
import { AddGameComponent } from './add-game/add-game.component';
import { UpdateGameComponent } from './update-game/update-game.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { GameGuard } from './game.guard';
import { SearchByGenreComponent } from './search-by-genre/search-by-genre.component';
const routes: Routes = [
  {path: "games", component : GamesComponent},
  {path: "add-game", component : AddGameComponent, canActivate:[GameGuard]},
  {path: "updateGame/:id", component: UpdateGameComponent},
  {path: 'login', component: LoginComponent},
  {path: 'app-forbidden', component: ForbiddenComponent},
  {path: "searchByGenre", component : SearchByGenreComponent},
  {path: "", redirectTo: "games", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
