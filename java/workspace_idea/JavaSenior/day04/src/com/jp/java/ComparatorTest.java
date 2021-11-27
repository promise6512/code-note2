package com.jp.java;

/*
*  Comparator定制排序
* */

import org.junit.Test;

import java.util.Arrays;
import java.util.Comparator;

public class ComparatorTest {
    @Test
    public void test(){
        String[] strArr = new String[]{"AA","BB","GG","CF","DO"};
        Arrays.sort(strArr, new Comparator<String>() {
            @Override
            public int compare(String s1, String s2) {
                return -s1.compareTo(s2);
            }
        });
        System.out.println(Arrays.toString(strArr));
    }
}
