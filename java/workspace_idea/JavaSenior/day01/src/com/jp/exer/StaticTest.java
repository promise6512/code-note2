package com.jp.exer;

class  Person {
    public void run() {
        System.out.println("run");
    }

    public static void sleep() {
        System.out.println("sleep");
    }

    public void test() {
        run();
        sleep();
        this.run();
        this.sleep();
    }
}

public class StaticTest {
    public static void main(String[] args) {
        new Person().test();
        new Person().run();
    }
}
