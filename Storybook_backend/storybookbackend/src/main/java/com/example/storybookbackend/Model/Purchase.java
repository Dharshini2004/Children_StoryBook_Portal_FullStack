package com.example.storybookbackend.Model;

import java.util.Date;

import com.fasterxml.jackson.annotation.JsonBackReference;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;

@Entity
public class Purchase {
    @Id
    @Column(nullable = false,unique = true)
    private int purchaseId;

    private Date purchaseDate;
    private String address;
    private String phoneNo;

    
    @OneToOne
    @JsonBackReference
    @JoinColumn(name = "order_id", unique = true)
    private OrderDetails order;


    public Purchase() {
    }


    public Purchase(int purchaseId, Date purchaseDate, String address, String phoneNo, OrderDetails order) {
        this.purchaseId = purchaseId;
        this.purchaseDate = purchaseDate;
        this.address = address;
        this.phoneNo = phoneNo;
        this.order = order;
    }


    public int getPurchaseId() {
        return purchaseId;
    }


    public void setPurchaseId(int purchaseId) {
        this.purchaseId = purchaseId;
    }


    public Date getPurchaseDate() {
        return purchaseDate;
    }


    public void setPurchaseDate(Date purchaseDate) {
        this.purchaseDate = purchaseDate;
    }


    public String getAddress() {
        return address;
    }


    public void setAddress(String address) {
        this.address = address;
    }


    public String getPhoneNo() {
        return phoneNo;
    }


    public void setPhoneNo(String phoneNo) {
        this.phoneNo = phoneNo;
    }


    public OrderDetails getOrder() {
        return order;
    }


    public void setOrder(OrderDetails order) {
        this.order = order;
    }

    
}
