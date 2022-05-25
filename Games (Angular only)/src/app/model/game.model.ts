import { Genre } from "./genre.model";
export class Game {
    idGame: number;
    name: string;
    developers: String;
    price: number;
    creationDate: Date;
    category: Genre;
}