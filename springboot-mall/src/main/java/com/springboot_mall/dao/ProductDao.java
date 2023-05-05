package com.springboot_mall.dao;

import java.util.List;

import com.springboot_mall.constant.ProductCategory;
import com.springboot_mall.dto.ProductQueryParams;
import com.springboot_mall.dto.ProductRequest;
import com.springboot_mall.model.Product;

public interface ProductDao {

	List<Product> getProducts(ProductQueryParams productQueryParams);
	
	Product getProductById(Integer productId); 

	Integer createProduct(ProductRequest productRequest);
	
	void updateProduct(Integer productId, ProductRequest productRequest);
	
	void deleteProductById(Integer productId);
}