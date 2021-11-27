package com.jp.java;

import com.jp.java2.MyException;

public class HandThrow {
	public static void main(String[] args) {
		Student s = new Student();
		try {
			s.regist(-20);
			s.toString();
		}catch(RuntimeException e) {
			System.out.println(e.getMessage());
		}
		
	}
}

class Student{
	private int id;
	
	public void regist(int id) {
		if(id > 0) {
			this.id = id;
		}else {
			throw new MyException("您输入的数字不合法");
		}
	}

	public String toString() {
		return "Student [id=" + id + "]";
	}
	
	
}