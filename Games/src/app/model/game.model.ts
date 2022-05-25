import { Genre } from "./genre.model";
export class Game {
    id_game: number;
    name: string;
    developers: String;
    price: number;
    creation_date: Date;
    category: Genre;
    rating: number;
}