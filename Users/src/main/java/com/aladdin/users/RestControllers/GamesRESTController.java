package com.aladdin.users.RestControllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.aladdin.users.entities.Game;
import com.aladdin.users.services.GameService;

@RequestMapping("/api")
public class GamesRESTController {
	@Autowired
	GameService gameService;

	@RequestMapping(method = RequestMethod.GET)
	public List<Game> getAllGames() {
		return gameService.getAllGames();
	}

	@RequestMapping(value = "/{id}", method = RequestMethod.GET)
	public Game getProduitById(@PathVariable("id") Long id) {
		return gameService.getGame(id);
	}

	@RequestMapping(method = RequestMethod.POST)
	public Game createProduit(@RequestBody Game game) {
		return gameService.saveGame(game);
	}

	@RequestMapping(method = RequestMethod.PUT)
	public Game updateProduit(@RequestBody Game game) {
		return gameService.updateGame(game);
	}

	@RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
	public void deleteProduit(@PathVariable("id") Long id) {
		gameService.deleteGameById(id);
	}

	@RequestMapping(value = "/prodscat/{idCat}", method = RequestMethod.GET)
	public List<Game> getGamesByCatId(@PathVariable("idCat") Long idCat) {
		return gameService.findByGenreIdCat(idCat);
	}
}
