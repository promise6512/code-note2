package com.jp.java;

/*
*  Comparable接口的使用
* */

import org.junit.Test;

import java.util.Arrays;

class Good implements Comparable{
    private String name;
    private double price;

    public Good(String name, double price) {
        this.name = name;
        this.price = price;
    }

    @Override
    public String toString() {
        return "Good{" +
                "name='" + name + '\'' +
                ", price=" + price +
                '}';
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    @Override
    public int compareTo(Object o) {
        if (o instanceof Good) {
            Good good = (Good) o;
            if (this.price > good.price) {
                return 1;
            } else if (this.price < good.price) {
                return -1;
            } else {
                //价格相同时以商品名称进行排序
                return this.name.compareTo(good.name);
            }
        }
        //return 0;
        throw new RuntimeException("传入数据类型不一致");
    }
}

public class CompareTest {
    //字符串,包装类实现了Comparable接口
    @Test
    public void test(){
        String[] strArr = new String[]{"AA","BB","GG","CF","DO"};
        Arrays.sort(strArr);
        System.out.println(Arrays.toString(strArr));
    }

    @Test
    public void test2(){
        Good[] arr = new Good[]{new Good("手机",4000),new Good("苹果",3)};
        Arrays.sort(arr);
        System.out.println(Arrays.toString(arr));
    }
}
