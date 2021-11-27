package com.jp.java;

/*
    String:字符串，使用一对""引起来表示。
    1.String声明为final的，不可被继承
    2.String实现了Serializable接口：表示字符串是支持序列化的。
            实现了Comparable接口：表示String可以比较大小
    3.String内部定义了final char[] value用于存储字符串数据
    4.String:代表不可变的字符序列。简称：不可变性。
        体现：1.当对字符串重新赋值时，需要重写指定内存区域赋值，不能使用原有的value进行赋值。
             2. 当对现有的字符串进行连接操作时，也需要重新指定内存区域赋值，不能使用原有的value进行赋值。
             3. 当调用String的replace()方法修改指定字符或字符串时，也需要重新指定内存区域赋值，不能使用原有的value进行赋值。
    5.通过字面量的方式（区别于new）给一个字符串赋值，此时的字符串值声明在字符串常量池中。
    6.字符串常量池中是不会存储相同内容的字符串的。
     */

import org.junit.Test;

public class StringTest {
    @Test
    public void test1() {
        String s1 = "123";
        String s2 = "123";
        System.out.println(s1 == s2);
    }

    @Test
    public void test2() {
        String s1 = "javaEE";
        String s2 = "javaEE";
        //在堆空间开辟地址值
        String s3 = new String(s1);
        String s4 = new String(s2);
        System.out.println(s3 == s4);

        Person p1 = new Person("hjp",20);
        Person p2 = new Person("hjp",20);
        System.out.println(p1.name.equals(p2.name)); //true
        System.out.println(p1.name == p2.name); //true
    }

    /*
   结论：
   1.常量与常量的拼接结果在常量池。且常量池中不会存在相同内容的常量。
   2.只要其中有一个是变量，结果就在堆中。
   3.如果拼接的结果调用intern()方法，返回值就在常量池中
    */
    @Test
    public void test3(){
        String s1 = "javaEE";
        String s2 = "hadoop";
        String s3 = "javaEEhadoop";
        String s4 = "javaEE" + "hadoop";
        String s5 = s1 + "hadoop";
        String s6 = "javaEE" + s2;
        String s7 = s1 + s2;
        System.out.println(s3 == s4);
        System.out.println(s4 == s5);
        System.out.println(s4 == s6);
        System.out.println(s5 == s7);
        String s8 = s5.intern();
        System.out.println(s4 == s8);

        final String s9 = "hadoop";
        String s10 = "javaEE" + s9;
        System.out.println(s10 == s3); //true
    }
}















