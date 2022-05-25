import { Role } from './role.model';

export class User {
    iduser: number;
    username: string;
    password: string;
    enabled: boolean;
    roles: String[];
}