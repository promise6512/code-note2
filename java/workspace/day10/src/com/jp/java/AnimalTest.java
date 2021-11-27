package com.jp.java;
/*
 *  封装性的体现
 *      1.将属性xxx私有化(private),通过getXxx或setXxx来获取和设置属性xxx
 *      2.不对外暴露的私有方法
 *      3.权限修饰符
 *            1.public
 *            2.private
 *            3.缺省
 *            4.protected
 *            可以用来修饰类和类的内部结构：属性，方法，构造器，内部类
 *            修饰类:缺省和public
 *            修饰类的内部结构:四种都可以
 * */
public class AnimalTest {
	public static void main(String[] args) {
		Animal a = new Animal();
		a.name = "大黄";
		a.age = 1;
		//a.legs = 4;// the field Animal.legs is not visible
		a.show();
	}
}

class Animal{
	String name;
	int age;
	//对legs进行封装和隐藏
	private int legs;
	
	public void setLegs(int leg) {
		if(leg > 0 && leg % 2 == 0) {
			legs = leg;
		}
	}
	
	public void getLegs() {
		System.out.println(legs);
	}
	
	public void eat() {
		System.out.println("能吃！");
	}
	
	public void show() {
		System.out.println("name:"+name+" age:"+age+" legs:"+legs);
	}
	
}