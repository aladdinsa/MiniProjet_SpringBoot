package com.aladdin.users.services;

import java.util.List;

import org.springframework.data.domain.Page;

import com.aladdin.users.entities.Game;
import com.aladdin.users.entities.Genre;

public interface GameService {

	Game saveGame(Game p);

	Game updateGame(Game p);

	void deleteGame(Game p);

	void deleteGameById(Long id);

	Game getGame(Long id);

	List<Game> getAllGames();

	List<Genre> getAllGenres();

	List<Game> findByNomGame(String nom);

	List<Game> findByNomGameLike(String nom);

	List<Game> findByNomPrix(String nom, Double prix);

	List<Game> findByGenre(Genre categorie);

	List<Game> findByGenreIdCat(Long id);

	List<Game> findByOrderByNomGameAsc();

	List<Game> trierGamesNomsPrix();

	Page<Game> getAllGamesParPage(int page, int size);
}
