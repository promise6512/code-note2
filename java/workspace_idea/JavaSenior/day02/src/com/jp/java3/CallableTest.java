package com.jp.java3;

import java.util.concurrent.Callable;
import java.util.concurrent.ExecutionException;
import java.util.concurrent.FutureTask;

/*
* 创建线程的方式三:实现Callable接口
*
*    如何理解Callable比Runnable强大
*       1. Callable有返回值
*       2. Callable可以抛出异常
*       3. Callable支持泛型
* */
//1.创建一个实现Callable的实现类
class NumThread implements Callable{
    //重写call方法
    public Object call() throws Exception {
        int sum = 0;
        for (int i = 1; i <= 100; i++) {
            if (i % 2 == 0) {
                System.out.println(i);
                sum += 1;
            }
        }
        return sum;
    }
}

public class CallableTest {
    public static void main(String[] args) {
        //3.创建callable接口实现类的对象
        NumThread numThread = new NumThread();

        //4.将此Callable接口实现类的对象作为传递到FutureTask构造器, 创建FutureTask的对象
        //可以获取callable的结果
        FutureTask futureTask = new FutureTask(numThread);

        //将FutureTask的对象传递到Thread构造器中并启动
        new Thread(futureTask).start();

        try {
            //6.获取Callable中call方法的返回值
            //get方法的返回值即为FutureTast构造器参数Callable实现类重写call方法的返回值
            Object sum = futureTask.get();
            System.out.println(sum);
        } catch (InterruptedException e) {
            e.printStackTrace();
        } catch (ExecutionException e) {
            e.printStackTrace();
        }
    }
}








