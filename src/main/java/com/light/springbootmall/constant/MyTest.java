package com.light.springbootmall.constant;

public class MyTest {

    public static void main(String[] args) {
        ProductCategory category = ProductCategory.FOOD;
        String s = category.name(); // Category轉字串
        System.out.println(s); // FOOD

        String s2 = "CAR";

        // 查看ProductCategory裡有沒有符合字串s2的值,有的話存進category2
        ProductCategory category2 = ProductCategory.valueOf(s2);

        // 兩個方法可以在Enum和String之間做轉換
    }
}
