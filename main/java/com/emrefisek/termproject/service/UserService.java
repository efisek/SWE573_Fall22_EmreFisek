package com.emrefisek.termproject.service;

import com.emrefisek.termproject.model.User;

import java.util.List;
import java.util.UUID;

public interface UserService {
    User getByUserId(String userId);

    User getByUserId(UUID userId);
    List<User> getFollowers(String userId);
    List<User> getFollowing(String userId);

    void deleteById(UUID userId);
}
