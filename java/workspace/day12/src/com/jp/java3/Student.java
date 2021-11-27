package com.jp.java3;

public class Student extends Person{
	String major;
    int id = 3190;
	
	public Student() {
		
	}
	
	public Student(String major) {
		this.major = major;
	}

	public Student(String name, int age, String major) {
		super(name, age);
		this.major = major;
		// TODO Auto-generated constructor stub
	}

	@Override
	public void eat() {
		// TODO Auto-generated method stub
		System.out.println("Student eat");
	}
	
	public void study() {
		this.eat();
		super.eat();
	}
	
	public void show() {
		System.out.println(this.id);
		System.out.println(super.id);
	}
}

