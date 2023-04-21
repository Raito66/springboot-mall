package com.springboot_mall.dao;

import com.springboot_mall.dto.ProductRequest;
import com.springboot_mall.model.Product;

public interface ProductDao {

	Product getProductById(Integer productId); 

	Integer createProduct(ProductRequest productRequest);
}