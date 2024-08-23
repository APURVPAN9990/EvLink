package com.demo.Controller;

import com.demo.Model.UserRegistration;
import com.demo.Repository.UserRegistrationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:3000") // Allow React frontend to connect
@RequestMapping("/api")
public class UserRegistrationController {

    @Autowired
    private UserRegistrationRepository userRegistrationRepository;

    @PostMapping("/register")
    public UserRegistration registerUser(@RequestBody UserRegistration userRegistration) {
        return userRegistrationRepository.save(userRegistration);
    }

    @PostMapping("/login")
    public UserRegistration loginUser(@RequestParam String fullname, @RequestParam String password) {
        return userRegistrationRepository.findByFullnameAndPassword(fullname, password);
    }
}
