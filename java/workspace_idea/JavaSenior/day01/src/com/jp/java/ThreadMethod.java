package com.jp.java;

/*
* Thread中的常用方法
*   1. start(): 启动当前线程 调用当前线程的run()
*   2. run(): 需要重写
*   3. currentThread(): 静态方法 返回当前代码执行的线程
*   4. getName: 获取当前线程的名字
*   5. setName: 设置当前线程的名字
*   6. yield: 释放当前cpu的执行权
*   7. join: 在线程A中调用线程B的join方法, 此时线程A就进入阻塞状态, 直到线程B完全执行完以后, 线程A才结束阻塞状态
*   8. sleep: 当前线程睡眠指定的毫秒数
*   9. isAlive: 判断线程是否存活
* */

class HelloThread extends Thread {
    @Override
    public void run() {
        for (int i = 0; i < 100; i++) {
            System.out.println(i + " " + Thread.currentThread().getName());

            if (i % 2 == 0) {
                try {
                    sleep(200);
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
            }

            /*if (i % 20 == 0) {
                this.yield();
            }*/
        }
    }

    public HelloThread(String name) {
        super(name);
    }
}

public class ThreadMethod {
    public static void main(String[] args) {
        HelloThread t1 = new HelloThread("Thread 1");
        t1.setName("线程1");
        t1.start();
        //  HelloThread t2 = new HelloThread("Thread 1");
        // t2.start();

        //给主线程命名
        Thread.currentThread().setName("主线程");
        for (int i = 0; i < 100; i++) {
            System.out.println(i + " " + Thread.currentThread().getName());
            if (i % 20 == 0) {
                try {
                    t1.join();
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
            }
        }

        t1.isAlive();
    }
}






