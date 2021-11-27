package com.jp.javaexer;

import java.util.Arrays;

public class test {
	public static void main(String[] args) {
		int[] arr = new int[] {12,3,3,34,56,77,432};
	    int tmp = arr[0];
		for(int i = 0;i < arr.length;i++) {
			arr[i] = arr[i] / tmp;
		}
		System.out.print(Arrays.toString(arr));
		
		
		
		
	}
}
