package com.jp.java;
/*
 * 方法的重载(overload)
 *     定义:在同一个类中，允许存在一个以上的同名方法，只要它们的参数个数或者参数类型不同即可
 * */
public class OverLoad {
	public static void main(String[] args) {
		OverLoad overLoad = new OverLoad();
		overLoad.getSum(1,1);
	}
	
	//如下的四个方法构成重载
	public void getSum(int i ,int j) {
		System.out.println(i+j);
	}
	
	public void getSum(double i ,double j) {
		System.out.println(i+j);
	}
	
	public void getSum(int i ,String j) {
		System.out.println(i+j);
	}
	
	public void getSum( String i,int j ) {
		System.out.println(i+j);
		getSum(1,1);
	}
}