package com.jp.java;

public class anonymousObj {
	public static void main(String[] args) {
		/*
		 * 匿名对象
		 *     我们创建的对象，没有显式地赋给一个变量名，即为匿名函数
		 *     
		 * */
		//匿名对象
		new Phone().sendEmail();
		new Phone().playGame();
	}
}

class Phone{
	double price;
	
	public void sendEmail() {
		System.out.println("发送邮件");
	}
	
	public void playGame() {
		System.out.println("玩游戏");
	}
	
}