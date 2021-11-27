package com.jp.java1;

public class Person {
	String name;
	int age;
	int id = 330381;
	public Person(String name, int age) {
		super();
		this.name = name;
		this.age = age;
	}
	public Person() {
		super();
	}
	public void eat() {
		System.out.println("eat");
	}
	
	public void walk(int distance) {
		System.out.println("walk" + distance);
		show();
		eat();
	}
	
	private void show() {
		System.out.println("我是人");
	}
	
	public Object info() {
		return null;
	}
	
}
