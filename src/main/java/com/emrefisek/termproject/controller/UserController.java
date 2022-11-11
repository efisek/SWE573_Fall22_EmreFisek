package com.emrefisek.termproject.controller;

import com.emrefisek.termproject.exception.ResourceNotFoundException;
import com.emrefisek.termproject.model.User;
import com.emrefisek.termproject.repository.UserRepository;
import com.emrefisek.termproject.security.CurrentUser;
import com.emrefisek.termproject.security.UserPrincipal;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @GetMapping("/user")
    @PreAuthorize("hasRole('USER')")
    public User getCurrentUser(@CurrentUser UserPrincipal userPrincipal) {
        return userRepository.findById(userPrincipal.getId())
                .orElseThrow(() -> new ResourceNotFoundException("User", "id", userPrincipal.getId()));
    }

    @PostMapping("/user/delete")
    @PreAuthorize("hasRole('USER')")
    public String deleteCurrentUser(@CurrentUser UserPrincipal userPrincipal) {
        userRepository.deleteById(userPrincipal.getId());
        return "User with "+userPrincipal.getId()+ " successfully deleted";
    }

}
