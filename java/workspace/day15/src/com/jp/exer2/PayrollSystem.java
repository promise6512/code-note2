package com.jp.exer2;

import java.util.Calendar;

public class PayrollSystem {
	public static void main(String[] args) {
		Employee[] emps = new Employee[2];
		
		emps[0] = new SalariedEmployee("马森", 1002, new MyDate(1992,2,29),10000);
		emps[1] = new HourlyEmployee("晶晶", 1240, new MyDate(1995,5,23),80,10);
		
		System.out.println(emps[0].toString());
		System.out.println(emps[0].earnings());
		
		Calendar calendar = Calendar.getInstance(); //获取当前日历
		int month = calendar.get(Calendar.MONTH);
		System.out.println(month); //获取当前月份
		
		
	}
}
