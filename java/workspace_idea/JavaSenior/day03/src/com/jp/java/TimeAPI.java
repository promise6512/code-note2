package com.jp.java;

import org.junit.Test;

import java.util.Date;

/*
* 日期和时间的api测试
*
* */
public class TimeAPI {
    @Test
    public void test1(){
        long time = System.currentTimeMillis(); //获取当前时间戳
        System.out.println(time);
    }

    @Test
    public void test2(){
        //构造器1:Date()
        Date date1 = new Date(); //创建当前时间对应Date对象
        System.out.println(date1.toString());//Mon Oct 11 00:03:53 CST 2021
        System.out.println(date1.getTime()); //1633881925160 获取时间戳

        Date date2 = new Date(1633881925160L); //创建指定时间戳的Date对象
        System.out.println(date2.toString());

        //创建java.sql.Date date3的对象
        java.sql.Date date3 = new java.sql.Date(1633881925160L);
        System.out.println(date3.toString());
    }


}
