package com.localle.backend.model;

import java.math.BigDecimal;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "products")
public class Product {

    private Long id;
    //@Embedded private Store store;
    private String productName;
    private BigDecimal productPrice;
    private String productImagePath;
 
    public Product(/*Store store,*/ String productName, BigDecimal productPrice, String productImagePath) {
        //this.store = store;
        this.productName = productName;
        this.productPrice = productPrice;
        this.productImagePath = productImagePath;
    }
 
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }
    
    /*
    @JoinColumn(name = "store_id")
    @ManyToOne
    public Store getStore() {
        return store;
    }
    public void setStore(Store store) {
        this.store = store;
    }
    */

    @Column(name = "product_name", nullable = false)
    public String getProductName() {
        return productName;
    }
    public void setProductName(String productName) {
        this.productName = productName;
    }
 
    @Column(name = "product_price", nullable = false)
    public BigDecimal getProductPrice() {
        return productPrice;
    }
    public void setProductPrice(BigDecimal productPrice) {
        this.productPrice = productPrice;
    }
 
    @Column(name = "product_image_path", nullable = false)
    public String getProductImagePath() {
        return productImagePath;
    }
    public void setProductImagePath(String productImagePath) {
        this.productImagePath = productImagePath;
    }

    @Override
    public String toString() {
        return "Product [" +
            "id=" + id +
            //"store=" + store.toString() +
            "productName=" + productName +
            "productPrice=" + productPrice +
            "productImagePath=" + productImagePath +
       "]";
    }
}