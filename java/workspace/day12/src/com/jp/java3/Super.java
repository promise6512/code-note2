package com.jp.java3;
/*
 * super关键字的使用
 *     1.super理解为父类的
 *     2.super可以用来调用属性、方法、构造器;
 *     3.super的使用
 *         this.属性/this.方法 先在子类中找，子类中没有再去父类找
 *         super.属性/super.方法 直接去直接父类中找，直接父类没有再去间接父类找
 *         注意:对于方法，只有被重写了才能使用super
 *     4.super调用构造器
 *         可以在子类构造器中显式的使用"super(形参列表)"的方式调用父类中声明的指定构造器
 *         "super(形参列表)"必须声明在构造器的首行
 *         我们在类的构造器中，针对this(形参列表)或super(形参列表)只能写其中的一个
 *         如果在构造器首行没有显式的声明this和super,则默认有super(),即调用父类空参构造器
 *     
 * */
public class Super {
	public static void main(String[] args) {
		Student s = new Student();
		s.show();
		s.study();
		
		Student s1 = new Student("hjp",20,"能源动力");
		System.out.println(s1.name);
	}
}
