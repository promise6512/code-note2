package com.jp.java;

public class twoDimensionArray {
	public static void main(String[] args) {
		int[] arr = new int[]{1,2,3}; //一维数组
		
		//1.二维数组的声明和初始化
		//静态初始化
		int[][] arr1 = new int[][]{{1,2,3},{4,5},{6,7,8}};
		
		//动态初始化1 ---> 数组内嵌套的每个数组长度为2
		String[][] arr2 = new String[3][2];
		
		//动态初始化2
		String[][] arr3 = new String[3][];
		
		//其他二维数组写法
		int[] arr4[] = new int[][]{{1,2,3},{4,5},{6,7,8}};
		int[] arr5[] = {{1,2,3},{4,5},{6,7,8}};
		
		//2.获取数组指定位置的元素
		System.out.println(arr1[0][1]);
		arr3[1] = new String[4];
		System.out.println(arr3[1][0]);
		// System.out.println(arr3[2][0]); --> 写法错误,因为arr3[2]为null
		
		//3.获取数组长度
		System.out.println(arr4.length);
		System.out.println(arr3.length);  // -->3
		
		//4.如何遍历二维数组
		for(int i = 0;i < arr4.length;i++) {
			for(int j = 0;j < arr4[i].length;j++) {
				System.out.print(arr4[i][j]); 
			}
		}
	}
}
