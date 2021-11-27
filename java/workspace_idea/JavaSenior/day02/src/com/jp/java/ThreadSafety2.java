package com.jp.java;

/*
*  使用同步方法实现Runnable接口
*     关于同步方法的总结
 *    1. 同步方法仍然涉及同步监视器, 只是不需要我们显式的声明
 *    2. 非静态的同步方法, 同步监视器：this
 *       静态方法的同步, 同步监视器: 当前类本身
 * */

class Window2 implements Runnable {
    private int ticket = 100;
    Object obj = new Object();

    @Override
    public void run() {
        while (true) {
            show();
        }
    }

    //同步方法
    private synchronized void show(){
        if (ticket > 0) {
            try {
                Thread.sleep(200);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
            System.out.println(Thread.currentThread().getName() + ":卖票, 票号为 " + ticket);
            ticket--;
        }
    }
}

public class ThreadSafety2 {
    public static void main(String[] args) {
        Window2 w = new Window2();
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
