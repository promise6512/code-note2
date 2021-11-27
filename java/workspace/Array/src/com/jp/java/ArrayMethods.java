package com.jp.java;

import java.util.Arrays;

public class ArrayMethods {
	public static void main(String[] args) {
		int[] arr1 = new int[] {1,2,3,4};
		int[] arr2 = new int[] {1,2,3,4};
		boolean isEqual = Arrays.equals(arr1, arr2);
		System.out.println(isEqual);
		
		String s = Arrays.toString(arr1);
		System.out.println(s);
		
		Arrays.fill(arr1,10);
		System.out.println(Arrays.toString(arr1));
		
		int[] arr3 = new int[] {1,3,2,5,4};
		Arrays.sort(arr3);
		System.out.println(Arrays.toString(arr3));
		
		int index = Arrays.binarySearch(arr3, 3);
		System.out.println(index);
	}
}
