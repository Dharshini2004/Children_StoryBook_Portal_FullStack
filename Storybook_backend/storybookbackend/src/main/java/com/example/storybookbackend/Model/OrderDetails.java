package com.example.storybookbackend.Model;

import java.util.Date;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToOne;

@Entity
public class OrderDetails {
    @Id
    @Column(nullable = false, unique = true)
    private int orderId;

    private float price;
    private Date orderDate;

    @ManyToOne
    @JsonBackReference
    @JoinColumn(name = "user_id", nullable = false)
    private UserDetails user;

    @OneToOne(mappedBy = "order",cascade = CascadeType.ALL, orphanRemoval = true)
    @JsonManagedReference
    private Purchase purchase;

    public OrderDetails() {
    }

    public OrderDetails(int orderId, float price, Date orderDate, UserDetails user) {
        this.orderId = orderId;
        this.price = price;
        this.orderDate = orderDate;
        this.user = user;
    }

    public int getOrderId() {
        return orderId;
    }

    public void setOrderId(int orderId) {
        this.orderId = orderId;
    }

    public float getPrice() {
        return price;
    }

    public void setPrice(float price) {
        this.price = price;
    }

    public Date getOrderDate() {
        return orderDate;
    }

    public void setOrderDate(Date orderDate) {
        this.orderDate = orderDate;
    }

    public UserDetails getUser() {
        return user;
    }

    public void setUser(UserDetails user) {
        this.user = user;
    }
}
