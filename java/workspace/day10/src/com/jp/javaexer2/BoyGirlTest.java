package com.jp.javaexer2;

public class BoyGirlTest {
	public static void main(String[] args) {
		Boy boy = new Boy("江熠",27);
		boy.shout();
		Girl girl = new Girl("余声声",26);
		Girl girl1 = new Girl("佟婳",27);
		System.out.println(girl.compare(girl1));
	}
}
