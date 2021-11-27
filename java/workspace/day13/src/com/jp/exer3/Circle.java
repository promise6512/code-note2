package com.jp.exer3;

public class Circle extends GeometricObject{
	private double radius;

	public Circle() {
		super();
		this.radius = 1.0;
	}

	public Circle(double radius) {
		super();
		this.radius = radius;
	}

	public Circle(double radius,String color, double weight) {
		super(color, weight);
		// TODO Auto-generated constructor stub
		this.radius = radius;
	}
	
}
