package com.jp.exercise;

import java.util.Scanner;

public class arrayDemo1 {
	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		System.out.println("请输入学生人数");
		int number = scan.nextInt();
		int[] scores = new int[number];
		System.out.println("请输入"+number+"个学生成绩");
		int maxScore = 0;
		for(int i = 0; i < scores.length; i++) {
			scores[i] = scan.nextInt();
			maxScore = scores[i] > maxScore ? scores[i] : maxScore;
		}
		
		char level;
		for(int i = 0; i < scores.length; i++) {
			if(maxScore - scores[i] <= 10) {
				level = 'A';	
			}else if(maxScore - scores[i] <= 20) {
				level = 'B';
			}else if(maxScore - scores[i] <= 30) {
				level = 'C';
			}else {
				level = 'D';
			}
			System.out.println("学生"+ i + "的成绩是" + scores[i] +"，的level是" + level);
		}
	}
}
