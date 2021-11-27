package com.jp.java2;

import org.junit.Test;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Iterator;

public class InteratorTest {
    @Test
    public void test(){
        Collection collection = new ArrayList();
        collection.add(123);
        collection.add("456");
        collection.add(false);
        collection.add(new Person("zy",20));

        //遍历集合
        Iterator iterator = collection.iterator();
        while (iterator.hasNext()) {
            System.out.println(iterator.next());
        }
    }

    @Test
    public void test2(){
        Collection collection = new ArrayList();
        collection.add(123);
        collection.add("456");
        collection.add(false);
        collection.add(new Person("zy",20));

        //遍历集合
        Iterator iterator = collection.iterator();
        while (iterator.hasNext()) {
            Object obj = iterator.next();
            if ("456".equals(obj)) {
                iterator.remove();
            }
        }
        System.out.println(collection);
    }
}











