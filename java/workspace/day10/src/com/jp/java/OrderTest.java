package com.jp.java;

public class OrderTest {
	public static void main(String[] args) {
		Order order = new Order();
		order.orderPublic = 1;
		order.orderDefault =2;
		//order.orderPrivate = 3; //the field order.orderPrivate is not visible
		
		order.methodDefault();
		order.methodPublic();
		//order.methodPrivate(); //the method order.orderPrivate is not visible
	}
}
