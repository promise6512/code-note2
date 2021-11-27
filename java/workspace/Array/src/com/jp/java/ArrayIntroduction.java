package com.jp.java;

public class ArrayIntroduction {
	public static void main(String[] args) {
		int num;
		
		int[] ids;	 //声明	
		//1.1静态初始化: 数组初始化和数组元素的赋值操作同时进行
		ids = new int[] {1001,1002,1003}; //这里的【new int】不能省略
		
		//1.2动态初始化：数组的初始化和数组元素的赋值操作分开进行
		String[] names = new String[5];
		
		int[] arr = {1,2,3,4}; //类型推断
		//总结:数组初始化结束后长度就确定了
		
		//2.如何调用数组指定位置的元素
		names[0] = "余声声";
		names[1] = "江熠";
		names[2] = "裴伽树";
		names[3] = "程乐一";
		names[4] = "姜大川";
		//names[5] = "佟婳"; 不可以继续增加元素
		
		System.out.println(names);
		System.out.println(names.length);
		System.out.println(ids.length);
		
		for(int i = 0; i < names.length; i++) {
			System.out.println(names[i]);
		}
		
	}
}
