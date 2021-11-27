package com.jp.java4;
//多态性的应用1

public class AnimalTest {
	public static void main(String[] args) {
		AnimalTest test = new AnimalTest();
		//省略重载方法的定义
		test.func(new Dog());
		test.func(new Cat());
	}
	
	public void func(Animal animal) {
		animal.eat();
		animal.shout();
	}
}

class Animal{
	
	
	public void eat(){
		System.out.println("动物：进食");
	}
	
	public void shout(){
		System.out.println("动物：叫");
	}
	
	
}

class Dog extends Animal{
	public void eat(){
		System.out.println("狗吃骨头");
	}
	
	public void shout(){
		System.out.println("汪！汪！汪！");
	}
	
	public void watchDoor(){
		System.out.println("看门");
	}
}
class Cat extends Animal{
	public void eat(){
		System.out.println("猫吃鱼");
	}
	
	public void shout(){
		System.out.println("喵！喵！喵！");
	}
}














