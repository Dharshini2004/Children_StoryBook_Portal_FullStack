package com.example.storybookbackend.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.storybookbackend.Model.Purchase;
import com.example.storybookbackend.Repository.PurchaseRepo;

@Service
public class PurchaseService {
    @Autowired
    PurchaseRepo purchaseRepo;

    //post and create 
    public Purchase createPurchaseDetails(Purchase purchase)
    {
        return purchaseRepo.save(purchase);
    }

    //get
    public List<Purchase> getPurchaseDetails()
    {
        return purchaseRepo.findAll();
    }

    //get by id
    public Purchase getPurchaseById(int id)
    {
        return purchaseRepo.findById(id).orElse(null);
    }

      //update or put
      public boolean updatePurchaseDetails(int id,Purchase purchase)
      {
          if(this.getPurchaseById(id)==null)
          {
              return false;
          }
          try{
              purchaseRepo.save(purchase);
          }
          catch(Exception e)
          {
              return false;
          }
          return true;
      }

    //delete
    public boolean deletePurchaseDetails(int id)
    {
        if(this.getPurchaseById(id)==null)
        {
            return false;
        }
        purchaseRepo.deleteById(id);
        return true;
    }
}
