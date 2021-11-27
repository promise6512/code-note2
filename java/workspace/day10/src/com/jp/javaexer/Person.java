package com.jp.javaexer;

public class Person {
	public static void main(String[] args) {
		Person p = new Person();
		System.out.println(p.age);
	}
	public int age;
	public String name;
	public Person(){
		age = 18;
	}
}
