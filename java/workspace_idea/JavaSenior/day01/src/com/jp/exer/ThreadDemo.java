package com.jp.exer;

class OddThread extends  Thread {
    @Override
    public void run() {
        for (int i = 0; i < 100; i++) {
            if (i % 2 == 1) {
                System.out.println(i + " " + Thread.currentThread().getName());
            }
        }
    }
}

class EvenThread extends  Thread {
    @Override
    public void run() {
        for (int i = 0; i < 100; i++) {
            if (i % 2 == 0) {
                System.out.println(i + " " + Thread.currentThread().getName());
            }
        }
    }
}

public class ThreadDemo {
    public static void main(String[] args) {
        OddThread ot = new OddThread();
        EvenThread et = new EvenThread();
        ot.start();
        et.start();



    }
}
