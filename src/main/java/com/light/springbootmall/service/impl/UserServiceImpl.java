package com.light.springbootmall.service.impl;

import com.light.springbootmall.dao.UserDao;
import com.light.springbootmall.dto.UserRegisterRequest;
import com.light.springbootmall.model.User;
import com.light.springbootmall.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class UserServiceImpl implements UserService {

    @Autowired
    private UserDao userDao;

    @Override
    public User getUserById(Integer userId) {
        return userDao.getUserById(userId);
    }

    @Override
    public Integer register(UserRegisterRequest userRegisterRequest) {
        return userDao.createUser(userRegisterRequest);
    }


}
