package com.jp.java3;

/*
*
* 创建线程的方式四: 使用线程池
*
* */

import java.util.concurrent.Executor;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

class NumThread2 implements Runnable{
    @Override
    public void run() {
        for (int i = 0; i <= 100; i++) {
            System.out.println(Thread.currentThread().getName() + ":" + i);
        }
    }
}

public class ThreadPool {
    public static void main(String[] args) {
        //1. 提供指定线程数量的线程池
        ExecutorService service = Executors.newFixedThreadPool(10);
        //2. 执行指定的线程的操作, 需要提供实现Runnable接口的对象
        service.execute(new NumThread2());//适合使用Runnable
        service.execute(new NumThread2());
        //service.submit(); //适合使用Callable
        //3.关闭连接池
        service.shutdown();
    }
}
