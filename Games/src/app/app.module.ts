import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GamesComponent } from './games/games.component';
import { AddGameComponent } from './add-game/add-game.component';
import { FormsModule } from '@angular/forms';
import { UpdateGameComponent } from './update-game/update-game.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { HttpClientModule } from '@angular/common/http';
// import { SearchByGenreComponent } from './search-by-genre/search-by-genre.component';
// import { UsersComponent } from './users/users.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    GamesComponent,
    AddGameComponent,
    UpdateGameComponent,
    LoginComponent,
    ForbiddenComponent
    // ,SearchByGenreComponent
    // ,UsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
