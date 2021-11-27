package com.jp.java;
/*
 * 构造器:
 *     作用:创建对象
 *     如果没有显式定义构造器，则系统会默认提供一个空参的构造器
 *     定义构造器的格式，权限修饰符 类名(形参列表){}
 *     一个类中定义多个构造器 彼此之间构成重载(overload)
 *     一旦我们显式定义了类的构造器 系统不再提供默认的空参构造器
 *     一个类中至少会有一个构造器(默认的或者我们自己定义的)
 * */
public class Constructor {
	
	public static void main(String[] args) {
		//创建类的对象
		Person p = new Person();//Person()为构造器
		Person p1 = new Person("Tom");
		System.out.println(p1.name);
		//Person p2 = new Person(1);
	}
}

class Person{
	String name;
	int age;
	
	//构造器
	public Person() {
		System.out.println("构造器被调用");
		age = 18;
	}
	
	public Person(String n) {
		name = n;
		age = 18;
	}
	public void eat() {
		System.out.println("人在吃饭");
	}
}










