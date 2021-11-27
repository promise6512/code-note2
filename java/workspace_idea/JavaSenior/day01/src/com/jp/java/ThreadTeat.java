package com.jp.java;

/*
 * 多线程的创建 方式1:继承于Thread类
 *  1.创建一个继承于Thread类的子类
 *  2.重写Thread类的run()
 *  3.创建Thread类的子类对象
 *  4.通过此类对象调用start()
 *
 * */

class MyThread extends Thread {
    @Override
    public void run() {
        for (int i = 0; i < 100; i++) {
            if (i % 2 == 0) {
                System.out.println(i + "  " + Thread.currentThread().getName());
            }
        }
    }
}

public class ThreadTeat {
    public static void main(String[] args) {
        MyThread t1 = new MyThread();
        //start的作用: 启动当前线程, 调用当前线程的run方法
        t1.start();

        //如果只调用run方法,则不会启动线程
        //t1.run();

        //一个线程只能启动一次
        //t1.start();

        MyThread t2 = new MyThread();
        t2.start();

        for (int i = 0; i < 100; i++) {
            if (i % 2 == 0) {
                System.out.println(i + "@@@@@@@@");
            }
        }

        //匿名子类
        new Thread(){
            @Override
            public void run() {
                for (int i = 0; i < 100; i++) {
                    if (i % 2 == 0) {
                        System.out.println(i + " " + Thread.currentThread().getName());
                    }
                }
            }
        }.start();

    }

}



