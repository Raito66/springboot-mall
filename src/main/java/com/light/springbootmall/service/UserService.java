package com.light.springbootmall.service;

import com.light.springbootmall.dto.UserRegisterRequest;
import com.light.springbootmall.model.User;

public interface UserService {

    User getUserById(Integer userId);
    Integer register(UserRegisterRequest userRegisterRequest);
}
