package com.jp.java2;
/*
 * 类的内部成员之五：内部类
 * 1. Java中允许将一个类A声明在另一个类B中，则类A就是内部类，类B称为外部类
 * 
 * 2.内部类的分类：成员内部类（静态、非静态）  vs 局部内部类(方法内、代码块内、构造器内)
 * 
 * 3.成员内部类：
 * 		一方面，作为外部类的成员：
 * 			>调用外部类的结构
 * 			>可以被static修饰
 * 			>可以被4种不同的权限修饰
 * 
 * 		另一方面，作为一个类：
 * 			> 类内可以定义属性、方法、构造器等
 * 			> 可以被final修饰，表示此类不能被继承。言外之意，不使用final，就可以被继承
 * 			> 可以被abstract修饰
 * 
 * 
 * 4.关注如下的3个问题
 *   4.1 如何实例化成员内部类的对象
 *   4.2 如何在成员内部类中区分调用外部类的结构
 *   4.3 开发中局部内部类的使用  见《InnerClassTest1.java》
 * 
 */
public class InnerClass {
	public static void main(String[] args) {
		//创建E实例(静态的成员内部类)
		Person.E e = new Person.E();
		e.method();
		//创建D实例(非静态成员的内部类)
		Person person = new Person();
		Person.D d = person.new D();
		d.method();
	}
}


class Person{
	public void eat() {
		System.out.println("我是Person的eat方法");
	}
	//成员内部类
	 class D{
		public void eat() {
			System.out.println("我是D的eat方法");
		}
		public void method() {
			//调用内部类的方法
			this.eat();
			//调用外部类的方法
			Person.this.eat();
		}
	}
	
    final static class E{
		String name;
		int age;
		public void eat() {
			
		}
		public void method() {
			System.out.println("我是成员内部类的方法");
			//调用内部类的方法
			this.eat();
			//调用外部类的方法
			//Person.this.eat();
		}
	}
	
	public Person() {
		class A{
			
		}
	}
	
	{
		class B{
			
		}
	}
	
	public void method() {
		class C{
			
		}
	}
}











