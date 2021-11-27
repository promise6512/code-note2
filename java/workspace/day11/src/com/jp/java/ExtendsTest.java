package com.jp.java;
/*
 * 面向对象的特征之二:继承性
 *    当子类继承了父类以后 子类就获取了父类中所有的属性和方法
 *       特别的，父类中声明为private的方法，子类中仍然继承
 *       只是因为封装性的影响，子类不能直接调用父类的结构
 *       子类的功能比父类更丰富
 *    1.好处:
 *        减少代码冗余
 *        便于拓展子类的功能
 *        为之后多态性的使用提供前提
 *    2.继承性的格式
 *        class A extends B{}
 *        A：子类、派生类、subclass
 *        B：父类、超类、基类、superclass
 * Java中关于类的规定
 *     一个父类可以被多个子类继承
 *     一个子类最多只能有一个父类-->单继承
 *     父子类是相对概念-->多层继承
 *     子类直接继承的父类称为直接父类;间接继承的父类称为间接父类
 *  
 * 关于Object类
 *    1.如果我们没有显式地声明一个父类 则此类继承与java.lang.Object类
 *    2.所有的java类都直接或间接继承与java.lang.Object类
 *    3.意外着，所有java类具有java.lang.Object类的功能
 *        
 * */
public class ExtendsTest {
	public static void main(String[] args) {
		Student s1 = new Student();
		s1.sleep();
		s1.setAge(20);
		System.out.println(s1.getAge());
		s1.show();
		s1.breath();
		
		Creature c = new Creature();
		
		System.out.println(c.toString());
	}
}
