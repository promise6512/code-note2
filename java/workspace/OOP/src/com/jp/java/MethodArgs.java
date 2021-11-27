package com.jp.java;
/*
 * 可变个数形参的方法
 *     语法:
 *         数据类型...变量名
 *     特点
 *         当调用可变个数形参的方法时，传入的参数个数可以是0 1 2 3
 *         可变个数形参的方法与本类中方法名相同，形参不同的方法之间构成重载
 *         可变个数形参的方法与本类中方法名相同，形参类型也相同的数组之间不构成重载
 *         可变个数形参在方法的形参中，必须声明在末尾且只能声明一个
 *     
 * */
public class MethodArgs {
	public static void main(String[] args) {
		MethodArgs methodArgs = new MethodArgs();
		methodArgs.show("hello");
		methodArgs.show("hello","world");
		methodArgs.show();
		//methodArgs.show("hello","world",3);
		methodArgs.show(3,"hello","world","java");
	}
	
	public void show(String ...strs) {
		//System.out.println("show(String)");
		System.out.println(strs);
		for(int i = 0;i < strs.length;i++) { 
			System.out.println(strs[i]);
		}	
	}
	
	/*
	 * 无法通过编译
	 * public void show(String[] strs) {
	 * 
	 * }
	 */
	
	public void show(int num,String ... strs) {
		System.out.println(num);
		System.out.println(strs);
	}
}
