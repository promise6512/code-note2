package com.jp.java;

public class Method {
	public static void main(String[] args) {
		Customer cust = new Customer();
		cust.name = "Tom";
		System.out.println(cust.getName());
		cust.sleep(5);
	}
}

class Customer{
	String name;
	int age;
	boolean isMale;
	
	public void eat() {
		System.out.println("客户吃饭");
	}
	
	public void sleep(int hour) {
		System.out.println("休息了"+hour+"小时");
		eat();
	}
	
	public String getName() {
		return name;
	}
	
	public String getNation(String nation) {
		return "我的国籍是" + nation;
	}
}