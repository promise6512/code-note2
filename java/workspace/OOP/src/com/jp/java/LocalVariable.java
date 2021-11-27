package com.jp.java;
/*
 *   属性:
 *     可以使用权限修饰符指明权限;
 *     常用的权限修饰符:private、public、缺省、protected  --->封装性
 *     默认初始值
 *     加载到堆空间
 *   局部变量
 *     不可以使用权限修饰符
 *     没有默认初始化值，在使用前一定要显式赋值
 *     加载到栈空间
 * */
public class LocalVariable {
	public static void main(String[] args) {
		User u1 = new User();
		u1.talk("中文");
		u1.eat();
	}
}
class User{
	//属性(成员变量)
	String name;
	int age;
	boolean isMale;
	
	public void talk(String language) {//language:形参(局部变量)
		System.out.println("我们使用"+language);
	}
	
	public void eat() {
		String food = "烙饼"; //局部变量
		System.out.println("北方人喜欢吃"+food);
	}
	
	
}