package com.jp.java;

public class test {
	public static void main(String[] args) {
		/*
		 * Circle circle = new Circle(); circle.radius = 4; double area =
		 * circle.getArea(); System.out.println(area);
		 */
		
		Rectangle rectangle = new Rectangle();
		rectangle.length = 10;
		rectangle.width = 8;
		rectangle.print();
	}
}

class Circle{
	double radius;
	
	public double getArea() {
		return radius*radius*3.14;
	}
}

class Rectangle{
	int length;
	int width;
	
	public void print(){
		for(int i = 0;i <= length;i++) {
			for(int j = 0;j <= width;j++) {
				System.out.print("*");
			}
			System.out.println();
		}
	}
}