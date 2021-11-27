package com.jp.exer;

import org.junit.Test;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

public class SimpleTimeFormatTest {
    @Test
    public void test() throws ParseException {
        String birth = "2020-09-08";
        SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd");
        Date date = format.parse(birth);
        long time = date.getTime();
        java.sql.Date date1 = new java.sql.Date(time);
        System.out.println(date1);
    }

    @Test
    public void test2(){

    }
}













