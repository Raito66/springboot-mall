package com.light.springbootmall.service;

import com.light.springbootmall.dto.CreateOrderRequest;
import com.light.springbootmall.model.Order;

public interface OrderService {

    Order getOrderById(Integer orderId);
    Integer createOrder(Integer userId, CreateOrderRequest createOrderRequest);
}
