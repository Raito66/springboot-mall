package com.springboot_mall.service;

import java.util.List;

import com.springboot_mall.constant.ProductCategory;
import com.springboot_mall.dto.ProductRequest;
import com.springboot_mall.model.Product;

public interface ProductService {
	
	List<Product> getProducts(ProductCategory category, String search);
	
	Product getProductById(Integer productId); 
	
	Integer createProduct(ProductRequest productRequest);
	
	void updateProduct(Integer productId, ProductRequest productRequest);
	
	void deleteProductById(Integer productId);
}
