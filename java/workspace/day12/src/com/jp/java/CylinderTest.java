package com.jp.java;

public class CylinderTest extends Circle{
	public static void main(String[] args) {
		CylinderTest cylinder = new CylinderTest();
		cylinder.setLength(2);
		cylinder.setRadius(2);
		System.out.println(cylinder.findVolume());
	}
	private double length;
    
	public CylinderTest() {
		this.length = 1;
	}

	public double getLength() {
		return length;
	}

	public void setLength(double length) {
		this.length = length;
	}
	
	public double findVolume() {
		return length*findArea();
		
	}
}
