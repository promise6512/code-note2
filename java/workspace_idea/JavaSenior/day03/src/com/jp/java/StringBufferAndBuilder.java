package com.jp.java;

import org.junit.Test;

/*
* String、StringBuffer、StringBuilder三者的异同？
    String:不可变的字符序列；底层使用char[]存储
    StringBuffer:可变的字符序列；线程安全的，效率低；底层使用char[]存储
    StringBuilder:可变的字符序列；jdk5.0新增的，线程不安全的，效率高；底层使用char[]存储
*
* */
public class StringBufferAndBuilder {

    @Test
    public void test(){
        StringBuffer sb1 = new StringBuffer("abc");
        sb1.setCharAt(1,'c');
        System.out.println(sb1);
        System.out.println(sb1.length());

        StringBuffer sb2 = new StringBuffer();
        System.out.println(sb2.length());

    }

    @Test
    public void test2(){
        StringBuffer str = new StringBuffer("ab");
        str.append(1);
        str.append("c");
        System.out.println(str);
        str.delete(1,3);
        System.out.println(str);

        StringBuffer str2 = new StringBuffer("abcdefg");
        str2.replace(1,3,"123");
        System.out.println(str2);

        str2.insert(4,false);
        System.out.println(str2);
        str2.reverse();
        System.out.println(str2);
        System.out.println(str2.substring(1,2));
    }
}
