package com.light.springbootmall.dao;

import com.light.springbootmall.dto.ProductRequest;
import com.light.springbootmall.model.Product;

public interface ProductDao {

    Product getProductById(Integer productId);

    Integer createProduct(ProductRequest productRequest);

    void updateProduct(Integer productId, ProductRequest productRequest);
}
