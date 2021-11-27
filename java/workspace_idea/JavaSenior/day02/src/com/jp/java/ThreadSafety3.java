package com.jp.java;

/*
* 使用同步方法实现继承Thread类的线程安全问题
*
*
* */

class Window3 extends Thread {
    private static int ticket = 100;

    public Window3(String name){
        super(name);
    }

    @Override
    public void run() {
        while (true) {
            show();
        }
    }

    public static synchronized void show() {
        //同步监视器: window3.class
        if (ticket > 0) {
            try {
                Thread.sleep(100);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
            System.out.println(Thread.currentThread().getName() + ":卖票, 票号为 " + ticket);
            ticket--;
        }
    }

}

public class ThreadSafety3 {
    public static void main(String[] args) {
        Window3 t1 = new Window3("窗口1");
        Window3 t2 = new Window3("窗口2");
        Window3 t3 = new Window3("窗口3");
        t1.start();
        t2.start();
        t3.start();
    }
}






