package com.jp.javaexer;

public class PassObject {
	public static void main(String[] args) {
		/*
		 * PassObject test = new PassObject(); Circle c = new Circle();
		 * test.printAreas(c,5);
		 */
		PassObject test = new PassObject();
		System.out.println(test.sequence(2));
	}
	public void printAreas(Circle c,int time) {
		for(int i = 0; i <= time;i++) {
			c.radius = i;
			System.out.println("半径为:"+c.radius+" 面积为"+c.findArea());
		}
	}
	
	public int sequence(int n) {
		if(n == 0) {
			return 1;
		}else if(n == 1) {
			return 4;
		}else {
			System.out.println(n+"@"+sequence(n-1));
			return 2*sequence(n-1) +sequence(n-2) ;
			
		}
	}
}
