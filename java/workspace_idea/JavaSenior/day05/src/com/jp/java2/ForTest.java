package com.jp.java2;

import org.junit.Test;

import java.util.ArrayList;
import java.util.Collection;

public class ForTest {
    @Test
    public void test1() {
        Collection collection = new ArrayList();
        collection.add(123);
        collection.add(456);
        collection.add(new Person("zy",20));
        collection.add(new String("Tom"));
        collection.add(false);

        for (Object obj : collection) {
            System.out.println(obj.toString());
        }
    }

    @Test
    public void test2() {
        int[] nums = new int[]{1,2,3,4,5};
        for (int num : nums) {
            System.out.println(num);
        }
    }

    public void test3() {
        String[] arr = new String[]{"MM", "AA", "BB"};

    }

}
