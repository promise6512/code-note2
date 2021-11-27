package com.jp.java3;

/*
*  生产者消费者问题
* */

class Clerk {
    private int production = 0;

    public synchronized void produce() {
        if (production < 20) {
            production++;
            System.out.println(Thread.currentThread().getName() + ":开始生产第" + production + "个产品");
            notify();
        } else {
            try {
                wait();
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
    }

    public synchronized void consume() {
        if (production > 0) {
            System.out.println(Thread.currentThread().getName() + ":开始消费第" + production + "个产品");
            production--;
            notify();
        } else {
            try {
                wait();
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
    }
}

class Producer extends Thread {
    private Clerk clerk;

    public Producer(Clerk clerk) {
        this.clerk = clerk;
    }

    @Override
    public void run() {
        while (true) {
            clerk.produce();
            try {
                sleep(100);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
    }
}

class Consumer extends Thread {
    private Clerk clerk;

    public Consumer(Clerk clerk) {
        this.clerk = clerk;
    }

    @Override
    public void run() {
        while (true) {
            clerk.consume();
            try {
                sleep(500);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
    }
}


public class Producer_Consumer {
    public static void main(String[] args) {
        Clerk clerk = new Clerk();
        Producer producer = new Producer(clerk);
        Consumer consumer = new Consumer(clerk);
        producer.setName("生产者");
        consumer.setName("消费者");
        producer.start();
        consumer.start();
    }
}
