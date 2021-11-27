package com.jp.java3;

import org.junit.Test;

/*
 * java中的JUnit单元测试
 *    步骤:
 *      1.选中当前工程-->右键选择:build path -add libraries - JUnit 4 - 下一步
 *      2.创建Java类,进行单元测试
 *        此时Java类要求:1.此类是public的。2.此类提供公共的无参的构造器
 *      3.此类声明单元测试方法
 *          此时的单元测试方法:方法的权限是public,没有返回值,没有形参
 *      4.此单元测试方法上,需要声明注解@Test 并在单元测试类中导入: org.junit.Test
 *      5.写完代码以后,左键双击单元测试方法名,右键run as - JUnit Test
 *      
 *      说明:
 *        1.如果执行结构没有任何异常:绿条
 *        2.如果执行结果异常:红条
 *      
 * */

public class JUnitTest {
	
	int num = 10;
	
	@Test
	public void testEquals() {
		String s1 = "MM";
		String s2 = "MM";
		System.out.println(s1.equals(s2));
		//ClassCastException
		//Date date = (Date)obj;
		System.out.println(num);
	}
	
	
}








