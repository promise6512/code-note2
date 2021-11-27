package com.jp.java1;
/*
 *   方法形参的值传递机制
 *       1.形参:方法定义时，声明的小括号内的参数
 *         实参:方法调用时，实际传递给形参的数据
 *       2.值传递机制
 *           如果参数是基本数据类型:
 *               实参赋给形参的值是储存的数据值
 *           如果参数是引用数据类型
 *               实参赋给形参的值是储存的地址值
 *           
 * */
public class ValueTransfer {
	public static void main(String[] args) {
		int[] arr = new int[] {1,2,3}; //[I@1c4af82c
		System.out.println(arr);
		
		char[] arr2 = new char[] {'1','2','3'};
		System.out.println(arr2); //123
	}
}

class Circle{
	
}








