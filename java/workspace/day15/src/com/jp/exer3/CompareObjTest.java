package com.jp.exer3;

public class CompareObjTest {
	public static void main(String[] args) {
		ComparableCircle cc = new ComparableCircle(12.0);
		System.out.println(cc.compareTo(new ComparableCircle(13.0)));
	}
}

interface CompareObject{
	public int compareTo(Object o);
}

class Circle{
	private Double radius;

	public Circle(Double radius) { 
		super();
		this.radius = radius;
	}

	public Double getRadius() {
		return radius;
	}

	public void setRadius(Double radius) {
		this.radius = radius;
	}
	
}

class ComparableCircle extends Circle implements CompareObject{

	public ComparableCircle(Double radius) {
		super(radius);
		// TODO Auto-generated constructor stub
	}

	@Override
	public int compareTo(Object o) {
		// TODO Auto-generated method stub
		if(this == o) {
			return 0;
		}
		if(o instanceof ComparableCircle) {
			ComparableCircle c = (ComparableCircle)o;
			/*
			if(this.getRadius() - c.getRadius() > 0) {
				return 1;
			}else if(this.getRadius() - c.getRadius() < 0) {
				return -1;
			}else {
				return 0;
			}
			*/
			return this.getRadius().compareTo(c.getRadius());
		}else {
			return 0;
		}
	}
	
	
}











