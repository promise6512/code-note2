package com.jp.java;

import java.util.Arrays;

public class StudentTest {
	public static void main(String[] args) {
		Student[] studentArr = new Student[20];
		for(int i = 0;i < studentArr.length;i++) {
			Student stu = new Student();
			stu.number = i + 1;
			stu.state = (int)(Math.random()*6+1);
			stu.score = (int)(Math.random()*101);
			studentArr[i] = stu;
		}
		
		for(int i = 0;i < studentArr.length;i++) {
			studentArr[i].getInfo();
		}
		
		for(int i = 0;i < studentArr.length-1;i++) {
			for(int j = 0;j < studentArr.length-i-1;j++) {
				if(studentArr[j].score < studentArr[j+1].score) {
					Student tmp = studentArr[j];
					studentArr[j] = studentArr[j+1];
					studentArr[j+1] = tmp;
				}
			}
		}
		
		for(int i = 0;i < studentArr.length;i++) {
			studentArr[i].getInfo();
		}
	}
}

class Student {
	int number;
	int state;
	int score;
	
	public void getInfo() {
		System.out.println("学号:"+number+" 年级:"+state+" 分数:"+score);
	}
}