package com.jp.java;

//测试类
public class OOPIntroduction {
	public static void main(String[] args) {
		//创建Person类的对象
		Person p1 = new Person();
		
		//调用属性
		p1.name = "Tom";
		p1.isMale = true;
		System.out.println(p1.age);
		p1.eat(); 
		
		Person p2 = new Person();
		System.out.println(p2.name);   //null
		System.out.println(p2.isMale); //false
		
		Person p3 = p1;
		System.out.println(p3.name); //Tom
	}
	
}
class Person{
	//属性
	String name;
	int age = 1;
	boolean isMale;
	
	//方法
	public void eat() {
		System.out.println("人可以吃饭");
	}
	
	public void run() {
		System.out.println("人可以跑步");
	}
}