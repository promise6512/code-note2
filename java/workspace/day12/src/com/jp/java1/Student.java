package com.jp.java1;

public class Student extends Person{
	String major;
    int id = 3190;
    
	public Student() {
		
	}
    public Student(String major) {
		this.major = major;
	}
	
    public void eat() {
    	System.out.println("学生应该多吃有营养的食物");
    }
	
    //show不能算重写方法
	public void show() {
		System.out.println("我是一个人学生");
		
	}
	//String是Object的子类
	public String info() {
		return null;
	}
	
	@Override
	public void walk(int distance) {
		
	}
}
