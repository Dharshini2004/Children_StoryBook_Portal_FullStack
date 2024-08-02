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

import com.example.storybookbackend.Model.Feedback;
import com.example.storybookbackend.Service.FeedbackService;

@RestController
public class FeedbackController {
     @Autowired
    FeedbackService feedbackService;

    //post
    @PostMapping("/addfeedback")
    public ResponseEntity<Feedback> addfeedback(@RequestBody Feedback feedback)
    {
        Feedback b=feedbackService.createFeedbackDetails(feedback);
        return new ResponseEntity<>(b,HttpStatus.CREATED);
    }

    //get
    @GetMapping("/getfeedbackdata")
    public ResponseEntity<java.util.List<Feedback>> showbookdetails()
    {
        return new ResponseEntity<>(feedbackService.getFeedbackDetails(),HttpStatus.OK);
    }

    //UPDATE
    @PutMapping("/putfeedbackdata/{id}")
    public ResponseEntity<Feedback> updateUserDetails(@PathVariable("id") int id,@RequestBody Feedback feedback )
    {   
        if(feedbackService.updateFeedbackDetails(id, feedback)==true)
        {

            return new ResponseEntity<>(feedback,HttpStatus.OK);
        }
        return new ResponseEntity<>(null,HttpStatus.NOT_FOUND);
    }

    //DELETE
    @DeleteMapping("/deletefeedbackdata/{id}")
    public ResponseEntity<Boolean> deleteuserdata(@PathVariable("id") int id)
    {
        if(feedbackService.deleteFeedbackDetails(id)==true)
        {
            return new ResponseEntity<>(true,HttpStatus.OK);
        }
        return new ResponseEntity<>(false,HttpStatus.NOT_FOUND);
    }
}
