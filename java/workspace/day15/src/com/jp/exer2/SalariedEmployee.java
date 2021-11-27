package com.jp.exer2;

public class SalariedEmployee extends Employee{
	private double monthlySalary;
	public SalariedEmployee(String name, int number, MyDate birthday,int monthlySalary) {
		super(name, number, birthday);
		this.monthlySalary = monthlySalary;
	}
    
	public double earnings() {
		return monthlySalary;
	}
	
	public String toString() {
		return "SalariedEmployee" + super.toString() + "]";
	}
}

