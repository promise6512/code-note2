package com.jp.exer2;

/**
* @Description
* @author Hu Jinpu Email:2523863783@qq.com
* @version
* @date 2021年8月2日下午7:30:14
*
*/
class GeometricTest{
	public static void main(String[] args) {
		GeometricObject circle = new Circle(1);
		GeometricObject rectangle = new MyRectangle(2, 2);
		GeometricTest test = new GeometricTest();
		test.displayGeometricObject(circle);
		test.displayGeometricObject(rectangle);
		boolean isEqual = test.equalsArea(circle, rectangle);
		System.out.print(isEqual);
	}
	public void displayGeometricObject(GeometricObject geometric) {
		System.out.println(geometric.findArea());
	}
	public boolean equalsArea(GeometricObject G1,GeometricObject G2) {
		if(G1.findArea() == G2.findArea()) {
			return true;
		}else {
			return false;
		}
	}
}
class GeometricObject {
	private String color;
	private double weight;
	
	public GeometricObject() {
		super();
	}

	public GeometricObject(String color, double weight) {
		super();
		this.color = color;
		this.weight = weight;
	}
    public double findArea(){
    	return 0;
    }
	public String getColor() {
		return color;
	}

	public void setColor(String color) {
		this.color = color;
	}

	public double getWeight() {
		return weight;
	}

	public void setWeight(double weight) {
		this.weight = weight;
	}
	
	
}

class Circle extends GeometricObject{
	private double radius;

	public Circle(double radius) {
		super();
		this.radius = radius;
	}

	public double findArea() {
		return radius*radius*Math.PI;
	}
	public double getRadius() {
		return radius;
	}

	public void setRadius(double radius) {
		this.radius = radius;
	}
}
class MyRectangle extends GeometricObject{
	private double height;
	private double weight;
	public MyRectangle(double height, double weight) {
		super();
		this.height = height;
		this.weight = weight;
	} 
	public double findArea() {
		return height*weight;
	}
	public double getHeight() {
		return height;
	}
	public void setHeight(double height) {
		this.height = height;
	}
	public double getWeight() {
		return weight;
	}
	public void setWeight(double weight) {
		this.weight = weight;
	}
	
}
