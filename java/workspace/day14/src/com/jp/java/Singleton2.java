package com.jp.java;
/*
 * 单例的实现 懒汉式
 * */
public class Singleton2 {
	
}

class Order{
	//1.私有化类的构造器
	private Order() {
		
	}
	
	//2.声明当前类的对象,没有初始化
	private static Order instance = null;
	
	//3.声明返回类的方法(public static)
	public static Order getInstance() {
		if(instance == null) {
			instance = new Order();
		}
		return instance;
	}
}
