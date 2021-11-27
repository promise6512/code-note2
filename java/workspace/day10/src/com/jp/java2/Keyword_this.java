package com.jp.java2;
/*
 * this关键字的使用
 *     1.this可以用来修饰属性 方法 和构造器
 *     2.this修饰属性和方法:
 *           this理解为当前对象
 *           
 *     在类的方法和构造器中 我们可以用this.属性或this.方法的方式调用当前对象属性或方法
 *     通常情况下 可以省略this
 *     但是如果方法的形参和类的属性名同名时 我们必须显式地使用"this.变量"的方式，表明
 *     此变量时属性而非形参
 *     
 *     this调用构造器
 *         1.在类的构造器中，可以显式的调用“this(形参列表)”方式，调用本类中指定的其他构造器
 *         2.不能调用自己
 *         3.规定:"this(形参列表)"必须声明在当前构造器的首行;
 *         4.构造器内部最多只能声明一个this(形参列表) 用来调用其他的构造器
 * */
public class Keyword_this {
	public static void main(String[] args) {
		Person p1 = new Person();
		p1.setAge(1);
		System.out.println(p1.getAge());
		Person p2 = new Person("Tom",18);
	}
}
class Person{
	private String name;
	private int age;
	
	public Person() {
		System.out.println("Person()");
	}
	
	public Person(String name, int age) {
		this();
		this.name = name;
		this.age = age;
	}
	public void setName(String name) {
		this.name = name;
	}
	
	public String getName() {
		int name;
		return this.name;
	}
	
	public void setAge(int age) {
		this.age = age;
	}
	
	public int getAge() {
		return this.age;
	}
	
	
}