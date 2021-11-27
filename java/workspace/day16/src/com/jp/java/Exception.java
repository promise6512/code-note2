package com.jp.java;

import java.util.Date;
import java.util.Scanner;

import org.junit.Test;

/*
 * 一、异常体系结构
 * 
 * java.lang.Throwable
 * 		|-----java.lang.Error:一般不编写针对性的代码进行处理。
 * 		|-----java.lang.Exception:可以进行异常的处理
 * 			|------编译时异常(checked)
 * 					|-----IOException
 * 						|-----FileNotFoundException
 * 					|-----ClassNotFoundException
 * 			|------运行时异常(unchecked,RuntimeException)
 * 					|-----NullPointerException
 * 					|-----ArrayIndexOutOfBoundsException
 * 					|-----ClassCastException
 * 					|-----NumberFormatException
 * 					|-----InputMismatchException
 * 					|-----ArithmeticException
 * 
 * 
 * 
 * 面试题：常见的异常都有哪些？举例说明
 */
public class Exception {
	//NullPointerException
	@Test
	public void test1() {
		//int[] arr = null;
		//System.out.println(arr[1]);
		
		String str = "abc";
		str = null;
		System.out.println(str.charAt(0));
	}
	//ArrayIndexOutOfBoundsException
	@Test
	public void test2() {
		int[] arr = new int[10];
		System.out.println(arr[120]);
	}
	
	//ClassCastException
	@Test
	public void test3() {
		Object obj = new Date();
		String str = (String)obj;
	}
	
	//NumberFormatException
	@Test 
	public void test4() {
		String str = "123a";
		int num = Integer.parseInt(str);
	}
	
	//InputMismatchException
	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		int num = scanner.nextInt();
		System.out.println(num);
		scanner.close();
	}
	
	//ArithmeticException
		@Test
	public void test6(){
		int a = 10;
		int b = 0;
		System.out.println(a / b);
	}
}















