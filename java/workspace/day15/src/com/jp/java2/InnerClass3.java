package com.jp.java2;

public class InnerClass3 {
	/*
	 * 在局部内部类的方法中（比如：show）如果调用局部内部类所声明的方法(比如：method)中的局部变量(比如：num)的话,
	 * 要求此局部变量声明为final的。
	 * 
	 * jdk 7及之前版本：要求此局部变量显式的声明为final的
	 * jdk 8及之后的版本：可以省略final的声明
	 * 
	 */
	public void method(){
		//局部变量
		int num = 10;	
		class AA{				
			public void show(){
//				num = 20;
				System.out.println(num);
			}
		}	
	}
}
