package com.jp.java;

public class Error {
	public static void main(String[] args) {
		int[] arr = new int[] {1,2,3,4,5};
		arr = null;
		//空指针异常
		System.out.println(arr[0]);
		
	}
}
