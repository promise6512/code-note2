package com.jp.java2;

/*
* 1.集合框架的概述
*      集合
*
* */

import com.sun.scenario.effect.impl.sw.sse.SSEBlend_SRC_OUTPeer;
import org.junit.Test;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collection;
import java.util.List;

public class CollectionTest {
    @Test
    public void test(){
        Collection collection = new ArrayList();
        collection.add(123);
        collection.add("123");
        collection.add(false);
        collection.add(new Person("zy",20));
        System.out.println(collection.contains(123)); //判断是否存在指定元素
        System.out.println(collection.contains(new String("123"))); //比较的是内容而非地址
        System.out.println(collection.contains(new Person("zy",20))); //调用equals方法比较

        //containsAll
        Collection coll1 = Arrays.asList(123,"123");
        System.out.println(collection.containsAll(coll1)); //判断coll1中的元素是否都在collection中
    }

    @Test
    public void test2(){
        Collection collection = new ArrayList();
        collection.add(123);
        collection.add("456");
        collection.add(false);
        collection.add(new Person("zy",20));

        //移除元素
        collection.remove(123);
        System.out.println(collection);

        System.out.println(collection.hashCode());
    }

    @Test
    public void test3(){
        Collection collection = new ArrayList();
        collection.add(123);
        collection.add("456");
        collection.add(false);
        collection.add(new Person("zy",20));

        System.out.println(collection.hashCode()); //返回集合对应的哈希值

        //集合 --> 数组
        Object[] arr = collection.toArray();
        System.out.println(Arrays.toString(arr));

        //数组 --> 集合
        List<String> list = Arrays.asList(new String[]{"AA","BB","CC"});
        System.out.println(list);

        List arr1 = Arrays.asList(new int[]{123,456});
        System.out.println(arr1); //[[I@504bae78]

        List<Integer> arr2 = Arrays.asList(new Integer[]{123,456});
        System.out.println(arr2); //[123, 456]


    }
}













