package com.light.springbootmall.service;

import com.light.springbootmall.dto.ProductRequest;
import com.light.springbootmall.model.Product;

public interface ProductService {

    Product getProductById(Integer productId);

    Integer createProduct(ProductRequest productRequest);
}
