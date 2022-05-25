//package com.aladdin.users.controllers;
//
//import java.util.List;
//
//import javax.validation.Valid;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.data.domain.Page;
//import org.springframework.stereotype.Controller;
//import org.springframework.ui.ModelMap;
//import org.springframework.validation.BindingResult;
//import org.springframework.web.bind.annotation.ModelAttribute;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RequestParam;
//
//import com.aladdin.users.entities.Game;
//import com.aladdin.users.entities.Genre;
//import com.aladdin.users.services.GameService;
//
//@Controller
//public class GameController {
//	@Autowired
//	GameService gameService;
//
//	@RequestMapping("/showCreate")
//	public String showCreate(ModelMap modelMap) {
//		List<Genre> cats = gameService.getAllGenres();
//		Game game = new Game();
//		Genre cat = new Genre();
//		cat = cats.get(0);
//		game.setGenre(cat);
//
//		modelMap.addAttribute("game", game);
//		modelMap.addAttribute("mode", "new");
//		modelMap.addAttribute("genre", cats);
//		return "formGame";
//	}
//
//	@RequestMapping("/saveGame")
//	public String saveGame(@Valid Game game, BindingResult bindingResult) {
//		System.out.println(game);
//		System.out.println(bindingResult.getAllErrors());
//		if (bindingResult.hasErrors())
//			return "formGame";
//
//		gameService.saveGame(game);
//		return "formGame";
//	}
//
//	@RequestMapping("/ListeGames")
//	public String listeGames(ModelMap modelMap, @RequestParam(name = "page", defaultValue = "0") int page,
//			@RequestParam(name = "size", defaultValue = "4") int size) {
//		Page<Game> games = gameService.getAllGamesParPage(page, size);
//		modelMap.addAttribute("games", games);
//		modelMap.addAttribute("pages", new int[games.getTotalPages()]);
//		modelMap.addAttribute("currentPage", page);
//		return "listeGames";
//	}
//
//	@RequestMapping("/supprimerGame")
//	public String supprimerGame(@RequestParam("id") Long id, ModelMap modelMap,
//			@RequestParam(name = "page", defaultValue = "0") int page,
//			@RequestParam(name = "size", defaultValue = "4") int size) {
//		gameService.deleteGameById(id);
//		Page<Game> games = gameService.getAllGamesParPage(page, size);
//		modelMap.addAttribute("games", games);
//		modelMap.addAttribute("pages", new int[games.getTotalPages()]);
//		modelMap.addAttribute("currentPage", page);
//		modelMap.addAttribute("size", size);
//		return "listeGames";
//	}
//
//	@RequestMapping("/modifierGame")
//	public String editerGame(@RequestParam("id") Long id, ModelMap modelMap) {
//		Game p = gameService.getGame(id);
//		List<Genre> cats = gameService.getAllGenres();
//		modelMap.addAttribute("game", p);
//		modelMap.addAttribute("mode", "edit");
//		modelMap.addAttribute("genre", cats);
//		return "formGame";
//	}
//
//	@RequestMapping("/updateGame")
//	public String updateGame(@ModelAttribute("game") Game game, ModelMap modelMap) {
//		gameService.updateGame(game);
//		List<Game> games = gameService.getAllGames();
//		modelMap.addAttribute("games", games);
//
//		return "listeGames";
//	}
//}