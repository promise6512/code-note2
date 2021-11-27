package com.jp.team.domain;

import com.jp.team.service.Status;

public class Programmer extends Employee{
	private int memberId; //开发团队ID
	private Status status = Status.FREE; //
	private Equipment equipment;
	public Programmer(int id, String name, int age, double salary, Equipment equipment) {
		super(id, name, age, salary);
		this.equipment = equipment;
	}
	public Programmer() {
		// TODO Auto-generated constructor stub
	}
	public int getMemberId() {
		return memberId;
	}
	public void setMemberId(int memberId) {
		this.memberId = memberId;
	}
	public Status getStatus() {
		return status;
	}
	public void setStatus(Status status) {
		this.status = status;
	}
	public Equipment getEquipment() {
		return equipment;
	}
	public void setEquipment(Equipment equipment) {
		this.equipment = equipment;
	}
	
	@Override
	public String toString() {
		return super.getDetail() + "\t程序员\t" + status.getNAME() + "\t\t\t" + equipment.getDescription();
	}
}
