package com.aladdin.users.entities;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Entity;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.validation.constraints.DecimalMax;
import javax.validation.constraints.DecimalMin;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.PastOrPresent;
import javax.validation.constraints.Size;

import org.springframework.format.annotation.DateTimeFormat;

@Entity
public class Game implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id_game;

	@NotNull
	@Size(min = 4, max = 25)
	// @Size (min = 4,max = 25,message = "Longueur doit êtrer entre {min} et {max}")
	private String name;
	private String developers;
	private Long rating;
	@DecimalMax("10000.0")
	@DecimalMin("10.0")
	private Double price;

	@Temporal(TemporalType.DATE)
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	@PastOrPresent
	private Date creation_date;

	@ManyToOne
	private Genre genre;

	public Game() {
		super();
	}

	public Game(String name, Double price, Date creation_date) {
		super();
		this.name = name;
		this.price = price;
		this.creation_date = creation_date;
	}

	public Long getId_Game() {
		return id_game;
	}

	public void setIdGame(Long id_game) {
		this.id_game = id_game;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDevelopers() {
		return developers;
	}

	public void setDevelopers(String developers) {
		this.developers = developers;
	}

	public double getPrice() {
		return price;
	}

	public void setPrice(double price) {
		this.price = price;
	}

	public @PastOrPresent Date getCreation_Date() {
		return creation_date;
	}

	public void setCreationDate(Date creation_date) {
		this.creation_date = creation_date;
	}

	public Genre getGenre() {
		return genre;
	}

	public void setGenre(Genre genre) {
		this.genre = genre;
	}

	public Long getRating() {
		return rating;
	}

	public void setRating(Long rating) {
		this.rating = rating;
	}

}