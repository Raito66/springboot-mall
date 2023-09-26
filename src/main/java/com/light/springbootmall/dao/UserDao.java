package com.light.springbootmall.dao;

import com.light.springbootmall.dto.UserRegisterRequest;
import com.light.springbootmall.model.User;

public interface UserDao {

    User getUserById(Integer userId);
    Integer createUser(UserRegisterRequest userRegisterRequest);
}
