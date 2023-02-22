package com.localle.backend.model;

import jakarta.persistence.Entity;
import jakarta.persistence.OneToMany;

@Entity
@Table(name="stores")
public class Store {
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private Long id;


    private String storeName;

    
    private String address;

    @OneToMany(mappedBy = "Store")
    private Set<Product> products;
}