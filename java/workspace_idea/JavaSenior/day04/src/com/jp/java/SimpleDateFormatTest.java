package com.jp.java;

import org.junit.Test;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

/*
SimpleDateFormat的使用：SimpleDateFormat对日期Date类的格式化和解析

1.两个操作：
1.1 格式化：日期 --->字符串
1.2 解析：格式化的逆过程，字符串 ---> 日期

2.SimpleDateFormat的实例化

 */
public class SimpleDateFormatTest {
    @Test
    public void test() throws ParseException {
        SimpleDateFormat sdf = new SimpleDateFormat();
        Date date = new Date();
        System.out.println(date);
        String format = sdf.format(date); //格式化：日期 --->字符串
        System.out.println(format);

        String str = "21-10-11 上午12:30";
        Date date1 = sdf.parse(str); //解析：格式化的逆过程，字符串 ---> 日期
        System.out.println(date1);
    }

    @Test
    public void test2() throws ParseException {
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd hh:mm:ss");
        Date date = new Date();
        System.out.println(date);
        String format = sdf.format(date); //格式化：日期 --->字符串
        System.out.println(format);

        String str = "2021-10-11 12:41:04";
        Date date1 = sdf.parse(str); //解析：格式化的逆过程，字符串 ---> 日期
        System.out.println(date1);
    }
}
