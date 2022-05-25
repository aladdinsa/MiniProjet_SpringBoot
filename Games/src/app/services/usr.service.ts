// import { Injectable } from '@angular/core';
// import { User } from '../model/user.model';

// @Injectable({
//   providedIn: 'root'
// })
// export class UsrService {
//   users: User[];
//   user: User;
//   constructor() {
//     this.users = [{ iduser: 1, username: "admin", password: "123", enabled: true, roles: ['ADMIN'] },
//     { iduser: 2, username: "aladdin", password: "123",enabled: true, roles: ["AGENT"] },
//     { iduser: 3, username: "user", password: "123",enabled: true, roles: ["USER"] }];
//   }
//   listeUsers(): User[] {
//     return this.users;
//   }
//   ajouterUser(user: User) {
//     this.users.push(user);
//   }
//   supprimerUser(user: User) {
//     const index = this.users.indexOf(user, 0);
//     if (index > -1) {
//       this.users.splice(index, 1);
//     }
//   }
//   trierUsers() {
//     this.users = this.users.sort((n1, n2) => {
//       if (n1.iduser > n2.iduser) {
//         return 1;
//       }
//       if (n1.iduser < n2.iduser) {
//         return -1;
//       }
//       return 0;
//     });
//   }
//   updateUser(user: User) {
//     this.supprimerUser(user);
//     this.ajouterUser(user);
//     this.trierUsers();
//   }
// }