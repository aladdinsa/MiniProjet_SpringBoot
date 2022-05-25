package com.aladdin.users.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Genre {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id_gen;
	private String name_gen;

	public Long getId_Gen() {
		return id_gen;
	}

	public void setId_Gen(Long idGen) {
		this.id_gen = idGen;
	}

	public String getName_Gen() {
		return name_gen;
	}

	public void setName_Gen(String nameGen) {
		this.name_gen = nameGen;
	}

	@Override
	public String toString() {
		return "Genre [idGen=" + id_gen + ", nameGen=" + name_gen + "]";
	}

}
