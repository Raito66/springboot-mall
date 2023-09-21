package com.light.springbootmall.service;

import com.light.springbootmall.constant.ProductCategory;
import com.light.springbootmall.dto.ProductRequest;
import com.light.springbootmall.model.Product;

import java.util.List;

public interface ProductService {


    List<Product> getProducts(ProductCategory category, String search);
    Product getProductById(Integer productId);

    Integer createProduct(ProductRequest productRequest);

    void updateProduct(Integer productId, ProductRequest productRequest);

    void deleteProductById(Integer productId);


}
