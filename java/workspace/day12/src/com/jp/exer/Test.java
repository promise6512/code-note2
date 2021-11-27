package com.jp.exer;

public class Test {
	public static void main(String[] args) {
		checkAccount check = new checkAccount(1122,20000,0.045,5000);
		check.show();
		check.withdraw(5000);
		check.show();
		check.withdraw(18000);
		check.show();
		check.withdraw(3000);
		check.show();
	}
}
