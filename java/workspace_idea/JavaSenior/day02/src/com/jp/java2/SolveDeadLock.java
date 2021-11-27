package com.jp.java2;
/*
*   解决线程安全的问题: Lock锁 ---JDK5.0 新增
*      lock和synchronize的区别
*      相同:都可以解决线程安全问题
*      不同:lock手动启动同步和结束同步
*          synchronize在执行完同步代码以后, 自动释放同步监视器
* */

import java.util.concurrent.locks.ReentrantLock;

class Window implements Runnable {
    private int ticket = 100;

    private ReentrantLock lock = new ReentrantLock();

    @Override
    public void run() {
        while (true) {
            try {
                //调用lock
                lock.lock();
                if (ticket > 0) {
                    try {
                        Thread.sleep(100);
                    } catch (InterruptedException e) {
                        e.printStackTrace();
                    }
                    System.out.println(Thread.currentThread().getName() + " :售票, 票号为" + ticket);
                    ticket--;
                } else {
                    break;
                }
            } finally {
                //调用解锁方法
                lock.unlock();
            }
        }
    }
}

public class SolveDeadLock {
    public static void main(String[] args) {
        Window w = new Window();
        Thread t1 = new Thread(w);
        Thread t2 = new Thread(w);
        Thread t3 = new Thread(w);
        t1.start();
        t2.start();
        t3.start();
    }
}





