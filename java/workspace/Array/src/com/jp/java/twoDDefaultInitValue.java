package com.jp.java;

public class twoDDefaultInitValue {
	public static void main(String[] args) {
		
		//5.二维数组元素的默认初始值
		int [][] arr = new int[4][3];
		System.out.println(arr[0]);    //地址值-->[I@1c4af82c
		System.out.println(arr[0][0]); // 0
		
		float [][] arr1 = new float[4][3];
		System.out.println(arr1[0]);    //地址值-->[F@123a439b
		System.out.println(arr1[0][0]); // 0.0
		
		String [][] arr2 = new String[4][3];
		System.out.println(arr2[0]);    //地址值-->[Ljava.lang.String;@53bd815b
		System.out.println(arr2[0][0]); // null
		
		String [][] arr3 = new String[4][];
		System.out.println(arr3[0]);    //-->null 
		//只规定了外层数组的长度时，初始值为null(无论元素类型)
	}
}
