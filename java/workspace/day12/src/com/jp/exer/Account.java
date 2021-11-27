package com.jp.exer;

public class Account {
	private int id;
	double balance;
	private double annualInterestRate;
	
	public Account() {
		super();
	}

	public Account(int id, double balance, double annualInterestRate) {
		super();
		this.id = id;
		this.balance = balance;
		this.annualInterestRate = annualInterestRate;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public double getBalance() {
		return balance;
	}

	public void setBalance(double balance) {
		this.balance = balance;
	}

	public double getAnnualInterestRate() {
		return annualInterestRate;
	}

	public void setAnnualInterestRate(double annualInterestRate) {
		this.annualInterestRate = annualInterestRate;
	}
	
	public double getMonthlyInterestRate() {
		return annualInterestRate/12;
	}
	
	public void withdraw(double amount) {
		if(balance >= amount) {
			balance -= amount;
		}else {
			System.out.println("余额不足");
		}
	}
	public void deposit(double amount) {
		balance += amount;
	}
}

















