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

import com.example.storybookbackend.Model.OrderDetails;
import com.example.storybookbackend.Service.OrderService;

@RestController
public class OrderController {
    @Autowired
    OrderService orderService;

    //post
    @PostMapping("/addorder")
    public ResponseEntity<OrderDetails> addOrder(@RequestBody OrderDetails orderDetails)
    {
        OrderDetails b=orderService.createOrderDetails(orderDetails);
        return new ResponseEntity<>(b,HttpStatus.CREATED);
    }

    //get
    @GetMapping("/getorderdata")
    public ResponseEntity<java.util.List<OrderDetails>> showOrderdetails()
    {
        return new ResponseEntity<>(orderService.getOrderDetails(),HttpStatus.OK);
    }

    //UPDATE
    @PutMapping("/putorderdata/{id}")
    public ResponseEntity<OrderDetails> updateOrderDetails(@PathVariable("id") int id,@RequestBody OrderDetails orderDetails )
    {   
        if(orderService.updateOrderDetails(id, orderDetails)==true)
        {

            return new ResponseEntity<>(orderDetails,HttpStatus.OK);
        }
        return new ResponseEntity<>(null,HttpStatus.NOT_FOUND);
    }

    //DELETE
    @DeleteMapping("/deleteorderdata/{id}")
    public ResponseEntity<Boolean> deleteOrderdata(@PathVariable("id") int id)
    {
        if(orderService.deleteOrderDetails(id)==true)
        {
            return new ResponseEntity<>(true,HttpStatus.OK);
        }
        return new ResponseEntity<>(false,HttpStatus.NOT_FOUND);
    }
}
