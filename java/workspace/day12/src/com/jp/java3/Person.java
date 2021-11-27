package com.jp.java3;

public class Person {
	String name;
	int age;
	int id = 330381;
	
	public Person() {
		
	}
	
	public Person(String name) {
		this.name = name;
	}
	
	public Person(String name,int age){
		this(name);
		this.age = age;
	}
	
	public void eat() {
		System.out.println("Person eat");
	}
	
	public void walk() {
		System.out.println("Person walk");
	}
}
