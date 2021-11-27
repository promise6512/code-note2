package com.jp.exer;

public class checkAccount extends Account{
	private int overdraft;
	
	public checkAccount(int id,double balance,double annualInterestRate,int overdraft) {
		super(id,balance,annualInterestRate);
		this.overdraft = overdraft;
	}

	public void withdraw(double amount) {
		if(balance >= amount) {
			balance -= amount;
			System.out.println("直接取款");
		}else {
			double overAmount = amount - balance;
			if(overdraft >= overAmount) {
				balance = 0;
				overdraft -= overAmount;
				System.out.println("需要透资"+overAmount);
			}else {
				System.out.println("用户超过可透支额度");
			}
		}
	}
	
	public void show() {
		System.out.println(
		   "id:"+getId()+" balance:"+this.getBalance()+" annualInterestRate:"+
		   this.getAnnualInterestRate()+" overDraft:"+this.overdraft
		);
	}
}
