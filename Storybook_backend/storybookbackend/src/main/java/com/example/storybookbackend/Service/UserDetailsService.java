package com.example.storybookbackend.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.storybookbackend.Model.UserDetails;
import com.example.storybookbackend.Repository.UserDetailsRepo;

@Service
public class UserDetailsService {
    @Autowired
    UserDetailsRepo userDetailsRepo;

    //post and create 
    public UserDetails createUserDetails(UserDetails userDetails)
    {
        return userDetailsRepo.save(userDetails);
    }

    //get
    public List<UserDetails> getUserDetails()
    {
        return userDetailsRepo.findAll();
    }

    //get by id
    public UserDetails getUserById(int id)
    {
        return userDetailsRepo.findById(id).orElse(null);
    }

      //update or put
      public boolean updateUserDetails(int id,UserDetails userDetails)
      {
          if(this.getUserById(id)==null)
          {
              return false;
          }
          try{
              userDetailsRepo.save(userDetails);
          }
          catch(Exception e)
          {
              return false;
          }
          return true;
      }

    //delete
    public boolean deleteUserDetails(int id)
    {
        if(this.getUserById(id)==null)
        {
            return false;
        }
        userDetailsRepo.deleteById(id);
        return true;
    }
}
