package com.jp.java;

/*
 * 数组元素初始化值:
 *     整型: 0;
 *     浮点型: 0.0;
 *     char型: 0或'\u0000' 而非'0'
 *     boolean: false
 *     
 *     数组元素是引用数据类型
 *         null(空值)
 * 
 * */
public class ArrayDefaultInitValue {
	public static void main(String[] args) {
		
		//5.数组元素默认的初始值
		int[] arr = new int[4];
		for(int i = 0; i < arr.length;i++) {
			System.out.println(arr[i]);
		}
		System.out.println("**********");
		
		char[] arr2 = new char[4];
		System.out.println(arr2[0]);
		
		String[] arr5 = new String[5];
		System.out.println(arr5[0]);
		
		
	}
}
