package com.example.storybookbackend.Model;

import com.fasterxml.jackson.annotation.JsonBackReference;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity
public class Feedback {
    @Id
    @Column(unique = true,nullable=false)
    private int feedback_id;
    
    @Column(nullable = false)
    private String feedbackmessage;

    @ManyToOne
    @JsonBackReference
    @JoinColumn(name = "user_id", nullable = false)
    private UserDetails user;

    public Feedback() {
    }

    public Feedback(int feedback_id, String feedbackmessage) {
        this.feedback_id = feedback_id;
        this.feedbackmessage = feedbackmessage;
    }

    public int getFeedback_id() {
        return feedback_id;
    }

    public void setFeedback_id(int feedback_id) {
        this.feedback_id = feedback_id;
    }

    public String getFeedbackmessage() {
        return feedbackmessage;
    }

    public void setFeedbackmessage(String feedbackmessage) {
        this.feedbackmessage = feedbackmessage;
    }

    public UserDetails getUser() {
        return user;
    }

    public void setUser(UserDetails user) {
        this.user = user;
    }

    
    
    
}
