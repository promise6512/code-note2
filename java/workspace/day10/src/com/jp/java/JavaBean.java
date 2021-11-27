package com.jp.java;
/*
 * JavaBean是一种java语言写成的可重用组件
 *    所谓的JavaBean，是指符合如下标准的java类
 *    类是公共的
 *    有一个无参的公共构造器
 *    有属性 且有对应的get、set方法
 * */
public class JavaBean {
	private int id;
	private String name;
	public JavaBean() {
		
	}
	public void setId(int i) {
		id = i;
	}
	public int getId() {
		return id;
	}
	public void setName(String n) {
		name = n;
	}
	public String getName() {
		return name;
	}
}
