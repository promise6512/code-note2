package com.jp.java;

/*
* 在Java中, 我们通过同步机制来解决线程的安全问题
*  方法1 同步代码块
*  方法2 同步方法
* */

class Window implements Runnable {
    private int ticket = 100;
    Object obj = new Object();

    @Override
    public void run() {
        while (true) {
            /*
            * 需要传入一个参数作为同步监视器(俗称锁)
            *    要求: 参数是一个对象, 且需要是同一个对象
            * */
            synchronized (this) {
                if (ticket > 0) {
                    try {
                        Thread.sleep(100);
                    } catch (InterruptedException e) {
                        e.printStackTrace();
                    }
                    System.out.println(Thread.currentThread().getName() + ":卖票, 票号为 " + ticket);
                    ticket--;
                } else {
                    break;
                }
            }

        }
    }
}

public class ThreadSafety {
    public static void main(String[] args) {
        Window w = new Window();
        Thread t1 = new Thread(w);
        Thread t2 = new Thread(w);
        Thread t3 = new Thread(w);
        t1.setName("窗口1");
        t2.setName("窗口2");
        t3.setName("窗口3");
        t1.start();
        t2.start();
        t3.start();

    }
}












