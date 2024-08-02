package com.example.storybookbackend.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.storybookbackend.Model.Feedback;
import com.example.storybookbackend.Repository.FeedbackRepo;

@Service
public class FeedbackService {
    @Autowired
    FeedbackRepo feedbackRepo;

    //post and create 
    public Feedback createFeedbackDetails(Feedback feedback)
    {
        return feedbackRepo.save(feedback);
    }

    //get
    public List<Feedback> getFeedbackDetails()
    {
        return feedbackRepo.findAll();
    }

    //get by id
    public Feedback getFeedbackById(int id)
    {
        return feedbackRepo.findById(id).orElse(null);
    }

    //update or put
    public boolean updateFeedbackDetails(int id,Feedback feedback)
    {
        if(this.getFeedbackById(id)==null)
        {
            return false;
        }
        try{
            feedbackRepo.save(feedback);
        }
        catch(Exception e)
        {
            return false;
        }
        return true;
    }

    //delete
    public boolean deleteFeedbackDetails(int id)
    {
        if(this.getFeedbackById(id)==null)
        {
            return false;
        }
        feedbackRepo.deleteById(id);
        return true;
    }
}
