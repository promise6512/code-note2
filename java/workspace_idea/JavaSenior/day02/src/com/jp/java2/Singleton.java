package com.jp.java2;

/*
* 使用同步机制将单例模式中的懒汉式改写为线程安全
*    饿汉式：在程序启动或单件模式类被加载的时候，单件模式实例就已经被创建。
     懒汉式：当程序第一次访问单件模式实例时才进行创建。
* 相关博客:https://www.cnblogs.com/nolonely/p/5927957.html
* */


class Bank {
    private Bank(){

    }

    private static Bank instance = null;

    //方法1加上synchronized就变成了同步方法 解决了线程同步
    /*public static synchronized Bank getInstance() {
        if (instance == null) {
            instance = new Bank();
        }
        return instance;
    }*/

    //方法2: 效率稍差
   /*
    public static Bank getInstance() {
        synchronized (Bank.class) {
            if (instance == null) {
                instance = new Bank();
            }
            return instance;
        }
    }
    */

    public static Bank getInstance() {
        if (instance == null) {
            synchronized (Bank.class) {
                if (instance == null) {
                    instance = new Bank();
                }
            }
        }
        return instance;
    }
}

public class Singleton {
    public static void main(String[] args) {

    }
}
