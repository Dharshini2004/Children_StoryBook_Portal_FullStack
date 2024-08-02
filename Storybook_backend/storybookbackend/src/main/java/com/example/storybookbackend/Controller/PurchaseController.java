package com.example.storybookbackend.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.storybookbackend.Model.Purchase;
import com.example.storybookbackend.Service.PurchaseService;

@RestController
public class PurchaseController {
    
    @Autowired
    PurchaseService purchaseService;

    //post
    @PostMapping("/addpurchase")
    public ResponseEntity<Purchase> addPurchase(@RequestBody Purchase purchase)
    {
        Purchase b=purchaseService.createPurchaseDetails(purchase);
        return new ResponseEntity<>(b,HttpStatus.CREATED);
    }

    //get
    @GetMapping("/getpurchasedata")
    public ResponseEntity<java.util.List<Purchase>> showPurchasedetails()
    {
        return new ResponseEntity<>(purchaseService.getPurchaseDetails(),HttpStatus.OK);
    }

    //UPDATE
    @PutMapping("/putpurchasedata/{id}")
    public ResponseEntity<Purchase> updatePurchaseDetails(@PathVariable("id") int id,@RequestBody Purchase purchase )
    {   
        if(purchaseService.updatePurchaseDetails(id, purchase)==true)
        {

            return new ResponseEntity<>(purchase,HttpStatus.OK);
        }
        return new ResponseEntity<>(null,HttpStatus.NOT_FOUND);
    }

    //DELETE
    @DeleteMapping("/deletepurchasedata/{id}")
    public ResponseEntity<Boolean> deletePurchasedata(@PathVariable("id") int id)
    {
        if(purchaseService.deletePurchaseDetails(id)==true)
        {
            return new ResponseEntity<>(true,HttpStatus.OK);
        }
        return new ResponseEntity<>(false,HttpStatus.NOT_FOUND);
    }
}
