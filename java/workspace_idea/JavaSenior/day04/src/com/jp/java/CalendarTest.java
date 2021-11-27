package com.jp.java;

import org.junit.Test;

import java.util.Calendar;

/*
*  Calendar日历类(抽象类)的使用
* */
public class CalendarTest {
    @Test
    public void test(){
        Calendar calendar = Calendar.getInstance();
        int day = calendar.get(Calendar.DAY_OF_MONTH);
        System.out.println(day);

        calendar.set(Calendar.DAY_OF_MONTH,20);
        System.out.println(calendar.get(Calendar.DAY_OF_MONTH));

        calendar.add(Calendar.DAY_OF_MONTH,2);
        System.out.println(calendar.get(Calendar.DAY_OF_MONTH));


    }
}
