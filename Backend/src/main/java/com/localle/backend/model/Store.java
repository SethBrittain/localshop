package com.localle.backend.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "stores")
public class Store {

    private Long id;
    private String storeName;
    private String storeImagePath;
 
    public Store(String storeName, String storeImagePath) {
        this.storeName = storeName;
        this.storeImagePath = storeImagePath;
    }
 
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }

    @Column(name = "store_name", nullable = false)
    public String getStoreName() {
        return storeName;
    }
    public void setStoreName(String storeName) {
        this.storeName = storeName;
    }
 
    @Column(name = "store_image_path", nullable = false)
    public String getStoreImagePath() {
        return storeImagePath;
    }
    public void setStoreImagePath(String storeImagePath) {
        this.storeImagePath = storeImagePath;
    }

    @Override
    public String toString() {
        return "Store [" +
            "id=" + id +
            "storeName=" + storeName +
            "storeImagePath=" + storeImagePath +
       "]";
    }
}