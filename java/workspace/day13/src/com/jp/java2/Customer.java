package com.jp.java2;

import java.util.Objects;

public class Customer {
	
	private String name;
	private int age;
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public int getAge() {
		return age;
	}
	public void setAge(int age) {
		this.age = age;
	}
	public Customer() {
		super();
	}
	public Customer(String name, int age) {
		super();
		this.name = name;
		this.age = age;
	}
	@Override
	public int hashCode() {
		return Objects.hash(age, name);
	}
	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Customer other = (Customer) obj;
		return age == other.age && Objects.equals(name, other.name);
	}
	@Override
	public String toString() {
		return "Customer [name=" + name + ", age=" + age + "]";
	}
	
	

	
}
