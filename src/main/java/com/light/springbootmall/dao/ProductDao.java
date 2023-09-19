package com.light.springbootmall.dao;

import com.light.springbootmall.model.Product;

public interface ProductDao {

    Product getProductById(Integer productId);
}
