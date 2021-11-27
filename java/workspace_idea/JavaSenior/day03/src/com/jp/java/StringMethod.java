package com.jp.java;

import org.junit.Test;

import java.io.UnsupportedEncodingException;
import java.util.Arrays;

public class StringMethod {
    @Test
    public void tes1(){
        String s1 = "helLoWorld";
        System.out.println(s1.length());//返回字符串长度
        System.out.println(s1.charAt(0)); //返回指定位置的字符
        System.out.println(s1.isEmpty());//判断是否为空
        System.out.println(s1.toLowerCase()); //变为小写
        String s2 = "  hellow   orld   "; //删除前后空格
        System.out.println(s2.trim());
    }

    @Test
    public void test2(){
        String s1 = "HelloWorld";
        String s2 ="helloworld";
        System.out.println(s1.equals(s2)); //比较字符串内容是否相同
        System.out.println(s1.equalsIgnoreCase(s2)); //比较字符串内容是否相同(忽略大小写)

        String s3 = "abc";
        String s4 = new String("abe");
        System.out.println(s3.compareTo(s4));

    }

    @Test
    public void test3(){
        String s1 = "helloworld";
        boolean b1 = s1.endsWith("ld"); //是否以指定字符串结尾
        boolean b2 = s1.startsWith("hell"); //是否以指定字符串开始
        System.out.println(b1);
        System.out.println(b2);

        boolean b3 = s1.startsWith("ll",2);
        System.out.println(b3);

        String s3 = "owo";
        System.out.println(s1.contains(s3));//是否包含指定字符串

        System.out.println(s1.indexOf("o"));
        System.out.println(s1.lastIndexOf("o"));

    }

    /*
    * String与char[]之间的转换
    *   String --> char[]
    *   char[] --> String
    * */
    @Test
    public void test4(){
        String str = "abc123";
        char[] charArr = str.toCharArray();
        System.out.println(Arrays.toString(charArr));

        String str2 = new String(charArr);
        System.out.println(str2);
    }

    /*
    * String 与 byte[]之间的转换
    *  编码:字符串 --> 二进制字符
    *  解码:反过来..
    * */
    @Test
    public void test5() throws UnsupportedEncodingException {
        String str = "abc123中国";
        //编码
        byte[] bytes = str.getBytes(); //默认采用UTF-8进行编码
        System.out.println(Arrays.toString(bytes));
        byte[] bytes2 = str.getBytes("gbk");
        System.out.println(Arrays.toString(bytes2));

        //解码
        String str2 = new String(bytes);
        System.out.println(str2);
        String str3 = new String(bytes2); //编码与解码所用字符集不同,导致乱码
        System.out.println(str3);
        String str4 = new String(bytes2, "gbk");
        System.out.println(str4);


    }

}















