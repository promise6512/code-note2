package com.jp.p2.service;

import com.jp.p2.bean.Customer;

public class CustomerList {
	private Customer[] customers;
	private int total = 0;
	
	public CustomerList(int totalCustomer) {
		customers = new Customer[totalCustomer];
	}
	public boolean addCustomer(Customer customer) {
		if(total >= customers.length) {
			return false;
		}
		customers[total++] = customer;
		return true;
		
	}
	public boolean replaceCustomer(int index, Customer cust) {
		if(index >= total || index < 0) {
			return false;
		}
		customers[index] = cust;
		return true;
		
	}
	public boolean deleteCustomer(int index) {
		if(index >= total || index < 0) {
			return false;
		}
		for(int i = index;i < total-1;i++) {
			customers[i] = customers[i+1];
		}
		customers[--total] = null;
		return true;
	}
	public Customer[] getAllCustomers() {
		Customer[] custs = new Customer[total];
		for(int i = 0;i < total ;i++) {
			custs[i] = customers[i];
		}
		return custs;
	}
	public Customer getCustomer(int index) {
		if(index < 0||index >= total ) {
			return null;
		}
		return customers[index];
		
	}
	public int getTotal() {
		return total;
	}

}



