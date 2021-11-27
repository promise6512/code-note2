package com.jp.java;

public class Circle {
	private double radius;
	
	Circle(){
		this.radius = 1;
	}
	
	public double findArea(){
		return Math.PI*radius*radius;
	}

	public double getRadius() {
		return radius;
	}

	public void setRadius(double radius) {
		this.radius = radius;
	}
}
