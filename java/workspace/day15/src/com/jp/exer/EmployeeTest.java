package com.jp.exer;

public class EmployeeTest {
	public static void main(String[] args) {
		Manager m1 = new Manager();
		m1.walk();
	}
}

abstract class Employee{
	int name;
	String id;
	int salary;
	
	public Employee() {
		super();
	}

	public Employee(int name, String id, int salary) {
		super();
		this.name = name;
		this.id = id;
		this.salary = salary;
	}
	
	abstract public void walk();
}

class Manager extends Employee{
    int bonus;
	public Manager() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Manager(int name, String id, int salary,int bonus) {
		super(name, id, salary);
		// TODO Auto-generated constructor stub
		this.bonus = bonus;
	}
	
	public void walk() {
		System.out.println("I can walk");
	}
	
}






