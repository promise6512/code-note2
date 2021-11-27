package com.jp.java;

public class Anonymous {
	public static void main(String[] args) {
        method(new Student());//匿名对象
		
		Worker worker = new Worker();
		method1(worker);//非匿名的类非匿名的对象
		
		method1(new Worker());//非匿名的类匿名的对象
		
		//创建了匿名子类的对象
		Person p = new Person(){
			@Override
			public void walk() {
			}

			@Override
			public void breath() {
			}
		};
		method1(p);
		
		//创建匿名子类的匿名对象
		method1(new Person() {

			@Override
			public void walk() {
				System.out.println("人能走");
				
			}

			@Override
			public void breath() {
				System.out.println("人能跑");
				
			}
			
		});
	}
	
	public static void method1(Person p){
		p.walk();
		p.eat();
		p.breath();
	}
	
	public static void method(Student s){
		
	}
}
class Worker extends Person{

	@Override
	public void walk() {
	}

	@Override
	public void breath() {
	}
	
}
