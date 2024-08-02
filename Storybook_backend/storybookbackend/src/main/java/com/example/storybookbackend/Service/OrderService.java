package com.example.storybookbackend.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.storybookbackend.Model.OrderDetails;
import com.example.storybookbackend.Repository.OrderRepo;

@Service
public class OrderService {
    @Autowired
    OrderRepo orderRepo;

    //post and create 
    public OrderDetails createOrderDetails(OrderDetails orderDetails)
    {
        return orderRepo.save(orderDetails);
    }

    //get
    public List<OrderDetails> getOrderDetails()
    {
        return orderRepo.findAll();
    }

    //get by id
    public OrderDetails getOrderById(int id)
    {
        return orderRepo.findById(id).orElse(null);
    }

    //update or put
    public boolean updateOrderDetails(int id,OrderDetails orderDetails)
    {
        if(this.getOrderById(id)==null)
        {
            return false;
        }
        try{
            orderRepo.save(orderDetails);
        }
        catch(Exception e)
        {
            return false;
        }
        return true;
    }

    //delete
    public boolean deleteOrderDetails(int id)
    {
        if(this.getOrderById(id)==null)
        {
            return false;
        }
        orderRepo.deleteById(id);
        return true;
    }
}
