package com.jp.java2;

/*
*   演示死锁
*   1.死锁理解:
*        不同线程分别占用对方需要的同步资源不放弃, 都在等待对方放弃自己需要的同步资源, 从而造成死锁
*        死锁出现后所有线程都处于阻塞状态
* */

public class DeadLock {
    public static void main(String[] args) {
        StringBuffer s1 = new StringBuffer();
        StringBuffer s2 = new StringBuffer();

        new Thread(){
            @Override
            public void run() {
                synchronized (s1) {
                    s1.append("a");
                    s2.append("1");
                    try {
                        sleep(1000);
                    } catch (InterruptedException e) {
                        e.printStackTrace();
                    }
                    synchronized (s2) {
                        s1.append("b");
                        s2.append("2");
                    }
                }
            }
        }.start();

        new Thread(new Runnable() {
            @Override
            public void run() {
                synchronized (s2) {
                    s1.append("c");
                    s2.append("3");
                    try {
                        Thread.currentThread().sleep(1000);
                    } catch (InterruptedException e) {
                        e.printStackTrace();
                    }
                    synchronized (s1) {
                        s1.append("d");
                        s2.append("4");
                    }
                }
            }
        }).start();

        System.out.println(s1);
        System.out.println(s2);
    }
}











