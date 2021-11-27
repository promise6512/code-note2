package com.jp.java;

import org.junit.Test;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.util.Date;

 /*
  LocalDate、LocalTime、LocalDateTime 的使用
  说明：
      1.LocalDateTime相较于LocalDate、LocalTime，使用频率要高
      2.类似于Calendar
   */

public class JDK8DateTime {
    @Test
    public void test(){
        LocalDate localDate = LocalDate.now();
        System.out.println(localDate); //2021-10-11
        LocalTime localTime = LocalTime.now();
        System.out.println(localTime);//08:40:30.036
        LocalDateTime localDateTime = LocalDateTime.now();
        System.out.println(localDateTime);//2021-10-11T08:40:30.036
        LocalDateTime localDateTime2 = LocalDateTime.of(2021,3,2,4,2);
        System.out.println(localDateTime2);
    }


}
