package com.jp.java;

/*
*  创建多线程的方式二: 实现Runnable接口
*   1. 创建一个实现Runnable接口的类、
*   2. 实现Runnable中的抽象方法
*   3. 创建实现类的对象
*   4. 将此对象作为参数传递到Thread类的构造器中
*   5. 通过Thread类的对象调用start()
* * */

class MyThread3 implements Runnable {

    @Override
    public void run() {
        for (int i = 0; i < 100; i++) {
            System.out.println(i);
        }
    }
}

public class ThreadTest3 {
    public static void main(String[] args) {
        MyThread3 window = new MyThread3();

        Thread t1 = new Thread(window);
        t1.start();

        Thread t2 = new Thread(window);
        t2.start();

        Thread t3 = new Thread(window);
        t3.start();
    }
}













