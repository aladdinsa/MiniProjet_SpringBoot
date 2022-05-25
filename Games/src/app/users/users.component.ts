// import { Component, OnInit } from '@angular/core';
// import { User } from '../model/user.model';
// import { UsrService } from '../services/usr.service';
// import { AuthService } from '../services/auth.service';
// @Component({
//   selector: 'app-users',
//   templateUrl: './users.component.html',
//   styleUrls: ['./users.component.css']
// })
// export class UsersComponent implements OnInit {

//   users: User[];
//   constructor(private userService: UsrService, public authService: AuthService) {
//     this.users = userService.listeUsers();
//   }
//   ngOnInit(): void {
//   }
//   supprimerUser(user: User) {
//     let conf = confirm("Are you sure ?");
//     if (conf) {
//       this.userService.supprimerUser(user);
//     }
//   }

// }
