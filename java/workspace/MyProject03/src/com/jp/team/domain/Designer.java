package com.jp.team.domain;

import com.jp.team.service.Status;

public class Designer extends Programmer{
	private double bonus; //奖金
	private Status status;
	public Designer(int id, String name, int age, double salary, Equipment equipment, double bonus) {
		super(id, name, age, salary, equipment);
		this.bonus = bonus;
	}

	public Designer() {
		// TODO Auto-generated constructor stub
		super();
	}

	public double getBonus() {
		return bonus;
	}

	public void setBonus(double bonus) {
		this.bonus = bonus;
	}

	@Override
	public String toString() {
		return super.getDetail() + "\t设计师" +"\t" +getStatus().getNAME() + "\t\t\t" + getEquipment().getDescription();
	}
	
	
}
