//package com.aladdin.users.repos;
//
//import java.util.List;
//
//import org.springframework.data.domain.Page;
//import org.springframework.data.domain.Pageable;
//import org.springframework.data.jpa.repository.JpaRepository;
//import org.springframework.data.jpa.repository.Query;
//import org.springframework.data.repository.query.Param;
//import org.springframework.data.rest.core.annotation.RepositoryRestResource;
//
//import com.aladdin.users.entities.Game;
//import com.aladdin.users.entities.Genre;
//
//@RepositoryRestResource(path = "rest")
//public interface GameRepository extends JpaRepository<Game, Long> {
//
//	List<Game> findByNomProduit(String nom);
//
//	List<Game> findByNomProduitLike(String nom);
//
//	Page<Game> findByNomProduitContains(String nom, Pageable pageable);
//
//	@Query("select p from Games p where p.name like %:name and p.price > :price")
//	List<Game> findByNomPrix(@Param("name") String nom, @Param("price") Double prix);
//
//	@Query("select p from Games p where p.genre = ?1")
//	List<Game> findByCategorie(Genre genre);
//
//	List<Game> findByCategorieIdCat(Long id);
//
//	List<Game> findByOrderByNomProduitAsc();
//
//	@Query("select p from Games p order by p.name ASC, p.price DESC")
//	List<Game> trierGamesNomsPrix();
//}
