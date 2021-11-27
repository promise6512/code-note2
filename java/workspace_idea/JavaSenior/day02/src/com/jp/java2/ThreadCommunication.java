package com.jp.java2;

/*
*  线程通信例子:
*     两个线程交替打印1-100
*
*  涉及到的三个方法(只能在同步代码块或同步方法中):
*  wait(): 一旦执行此方法, 当前线程就进入阻塞状态, 并释放同步监视器(锁)
*  notify(): 唤醒被wait的一个线程(优先级最高)
*  notifyAll(): 唤醒所有wait的线程
*  说明: 1.以上三个方法必须同步代码块或同步方法中的同步监视器
*        2.以上三个方法其实定义在java.lang.Object类中
*
*  sleep() 和 wait() 的异同
*  1.相同点: 一旦执行方法, 都可以使当前线程进入阻塞状态
*  2.不同点: 1.两个方法声明的位置不同, Thread类中声明sleep, Object类中声明wait()
*           2.调用要求不同, sleep()可以在任何需要的场景下调用, wait()必须使用在同步代码中
*           3.如果在同步代码块或同步方法中调用, sleep()不会释放同步监视器, wait()会
* */

class Number implements Runnable{
    private int number = 1;

    @Override
    public void run() {
        while (true) {
            synchronized (this) {
                //唤醒另一个线程
                notify();

                if (number < 100) {
                    System.out.println(Thread.currentThread().getName() + ":" + number);
                    number++;

                    try {
                        //使线程进入阻塞状态
                        wait();
                    } catch (InterruptedException e){
                        e.printStackTrace();
                    }
                } else {
                    break;
                }
            }
        }
    }
}

public class ThreadCommunication {
    public static void main(String[] args) {
        Number number = new Number();
        Thread t1 = new Thread(number);
        Thread t2 = new Thread(number);
        t1.start();
        t2.start();

    }
}
