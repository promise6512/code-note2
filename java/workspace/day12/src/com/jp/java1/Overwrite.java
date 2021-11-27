package com.jp.java1;
/*
 * 方法重写(overrite/overwrite)
 *     子类继承父类以后，可以对父类中同名同参数的方法，进行覆盖重写
 *     
 *     重写规定
 *        1.子类重写的方法和权限修饰符不小于父类重写的方法的权限修饰符
 *        2.子类中不能重写父类中权限为private的方法     
 *        3.返回值类型
 *            父类被重写的方法返回值为void 则子类也只能是void
 *            父类被重写的方法的返回值类型是A 则子类重写的方法的返回类型可以是A或A的子类 
 *            父类被重写的方法的返回值类型是基本数据类型 则子类重写的方法的返回类型与其相同
 *        4.子类重写的方法抛出的异常类型不大于父类重写的方法抛出的异常类型
 *        
 *        子类和父类中同名同参数的方法要么都声明为非static(考虑重写) 要么都声明为static
 * */
public class Overwrite {
	public static void main(String[] args) {
		Student s = new Student("计算机科学与技术");
		s.eat();
		s.walk(10);
		
		
	}
}
