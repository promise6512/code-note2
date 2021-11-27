package com.jp.java1;
//JDK8：除了定义全局常量和抽象方法之外，还可以定义静态方法、默认方法（略）
public class Interface2 {
	public static void main(String[] args) {
		SubClass c = new SubClass();
		//1.接口中定义的静态方法,只能通过接口调用
		CompareA.method1();
		//2.通过实现类的对象,可以调用接口的默认方法(可以重写方法)
		c.method2();
		//3.如果子类(实现类)继承的父类和实现的接口中声明了同名同参数的方法,默认调用父类的方法
		c.method3();
		
		//知识点4：如果实现类实现了多个接口，而这多个接口中定义了同名同参数的默认方法，
		//那么在实现类没有重写此方法的情况下，报错。-->接口冲突。
		//这就需要我们必须在实现类中重写此方法
		
		SubClass2 subClass2 = new SubClass2();
		subClass2.method3();
	}
}

interface CompareA{
	//静态方法
	public static void method1() {
		System.out.println("CompareA:北京");
	}
	
	//默认方法
	public default void method2() {
		System.out.println("CompareA:上海");
	}
	
	//省略public
	default void method3() {
		System.out.println("CompareA:上海");
	}
}
class SuperClass{
	public void method3() {
		System.out.println("SuperClass:北京");
	}
}
class SubClass extends SuperClass implements CompareA{
	
}

interface CompareB{
	default void method3() {
		System.out.println("CompareB:上海");
	}
}


class SubClass2 implements CompareA,CompareB{

	@Override
	public void method3() {
		//5.调用接口中的方法
		CompareA.super.method3();
		CompareB.super.method3();
	}
	
}




