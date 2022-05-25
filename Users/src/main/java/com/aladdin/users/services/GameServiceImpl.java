//package com.aladdin.users.services;
//
//import java.util.List;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.data.domain.Page;
//import org.springframework.data.domain.PageRequest;
//import org.springframework.stereotype.Service;
//
//import com.aladdin.users.entities.Game;
//import com.aladdin.users.entities.Genre;
//import com.aladdin.users.repos.GameRepository;
//import com.aladdin.users.repos.GenreRepository;
//
//@Service
//public class GameServiceImpl implements GameService {
//
//	@Autowired
//	GameRepository gameRepository;
//
//	@Autowired
//	GenreRepository genreRepository;
//
//	@Override
//	public Game saveGame(Game p) {
//
//		return gameRepository.save(p);
//	}
//
//	@Override
//	public Game updateGame(Game p) {
//		return gameRepository.save(p);
//	}
//
//	@Override
//	public void deleteGame(Game p) {
//		gameRepository.delete(p);
//
//	}
//
//	@Override
//	public Game getGame(Long id) {
//
//		return gameRepository.findById(id).get();
//	}
//
//	@Override
//	public List<Game> getAllGames() {
//		return gameRepository.findAll();
//	}
//
//	@Override
//	public void deleteGameById(Long id) {
//		gameRepository.deleteById(id);
//
//	}
//
//	@Override
//	public List<Game> findByNomGame(String nom) {
//		return gameRepository.findByNomProduit(nom);
//	}
//
//	@Override
//	public List<Game> findByNomGameLike(String nom) {
//		return gameRepository.findByNomProduitLike(nom);
//	}
//
//	@Override
//	public List<Game> findByNomPrix(String nom, Double prix) {
//		return gameRepository.findByNomPrix(nom, prix);
//	}
//
//	@Override
//	public List<Game> findByGenre(Genre categorie) {
//		return gameRepository.findByCategorie(categorie);
//	}
//
//	@Override
//	public List<Game> findByGenreIdCat(Long id) {
//		return gameRepository.findByCategorieIdCat(id);
//	}
//
//	@Override
//	public List<Game> findByOrderByNomGameAsc() {
//		return gameRepository.findByOrderByNomProduitAsc();
//	}
//
//	@Override
//	public List<Game> trierGamesNomsPrix() {
//		return gameRepository.trierGamesNomsPrix();
//	}
//
//	@Override
//	public Page<Game> getAllGamesParPage(int page, int size) {
//
//		return gameRepository.findAll(PageRequest.of(page, size));
//	}
//
//	@Override
//	public List<Genre> getAllGenres() {
//
//		return genreRepository.findAll();
//	}
//
//}
