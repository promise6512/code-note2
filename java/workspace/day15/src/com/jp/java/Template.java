package com.jp.java;
/*
 * 抽象类的应用：模板方法的设计模式
 * 
 */
public class Template {
	public static void main(String[] args) {
		SubTemplate t = new SubTemplate();
		t.spendTime();
	}
}

abstract class TemplateTest{
	//计算某段代码执行所需时间
	public void spendTime() {
		long start = System.currentTimeMillis();//获取当前时间
		code();
		long end = System.currentTimeMillis();
		System.out.println(end-start);
	}
	public abstract void code();
}

class SubTemplate extends TemplateTest{
	public void code() {
		for(int i = 2;i <= 1000;i++){
			boolean isFlag = true;
			for(int j = 2;j <= Math.sqrt(i);j++){
				
				if(i % j == 0){
					isFlag = false;
					break;
				}
			}
			if(isFlag){
				System.out.println(i);
			}
		}
	}
}








