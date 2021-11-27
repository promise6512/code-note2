package com.jp.team.domain;

public class NoteBook implements Equipment{
	private String model;
	private double price;
	@Override
	public String getDescription() {
		// TODO Auto-generated method stub
	    return this.model + "(" + this.price + ")";
	}
	public NoteBook(String model, double price) {
		super();
		this.model = model;
		this.price = price;
	}
	public String getModel() {
		return model;
	}
	public void setModel(String model) {
		this.model = model;
	}
	public double getPrice() {
		return price;
	}
	public void setPrice(double price) {
		this.price = price;
	}
}
