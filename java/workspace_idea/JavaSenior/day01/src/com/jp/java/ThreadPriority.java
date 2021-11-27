package com.jp.java;

/*
*  线程优先级
*     1.默认优先级5 最高10 最低1
*     2.高优先级的线程要抢占低优先级线程cpu的执行权, 但是只是从概率上讲
* */



class MyThread2 extends Thread {
    @Override
    public void run() {
        for (int i = 0; i < 100; i++) {
            System.out.println(i + " " + getName() +  " " + getPriority());
        }
    }
}

public class ThreadPriority {
    public static void main(String[] args) {
        MyThread2 t1 = new MyThread2();
        t1.setPriority(Thread.MAX_PRIORITY);
        t1.start();
        for (int i = 0; i < 100; i++) {
            System.out.println(i + " " + Thread.currentThread().getName() + " " + Thread.currentThread().getPriority());
        }
    }
}
