package com.jp.java;

public class Student extends Person{
	String major;
    
	public Student() {
		super();
	}

	public Student(String major) {
		super();
		this.major = major;
	}
	
	public void study() {
		System.out.println("study");
	}
	
	public void show() {
		System.out.println("name:"+name+" age"+getAge()+" major:"+major);
	}
}
