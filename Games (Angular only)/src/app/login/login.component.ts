import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { User } from '../model/user.model';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  erreur = 0;
  user = new User();
  constructor(private authService: AuthService,
    private router: Router) { }
  onLoggedin() {
    this.authService.getUserFromDB(this.user.username).subscribe((usr: User) => {
      if (usr.password == this.user.password) {
        this.authService.SignIn(usr);
        this.router.navigate(['/']);
      }
      else
        this.erreur = 1;
    }, (err) => console.log(err));
  }

  ngOnInit(): void {
  }

}
