package com.jp.java;

//使用enum定义枚举类
//定义的枚举类默认继承于 class java.lang.Enum

import java.util.Arrays;

public class EnumTest2 {
    public static void main(String[] args) {
        Direction LEFT = Direction.LEFT;
        System.out.println(LEFT);
        System.out.println(Direction.class.getSuperclass());

        //enum中的常用方法
        //toString
        System.out.println(LEFT.toString()); //LEFT
        //values
        Direction[] directions = Direction.values();
        System.out.println(Arrays.toString(directions)); //[LEFT, RIGHT, UP, DOWN]
        System.out.println("**********************************");
        //valueOf
        Direction RIGHT = Direction.valueOf("RIGHT");
        System.out.println(RIGHT);
        RIGHT.show();

        //打印线程状态
        System.out.println(Arrays.toString(Thread.State.values())); //[NEW, RUNNABLE, BLOCKED, WAITING, TIMED_WAITING, TERMINATED]

    }
}

interface Info {
    void show();
}

enum Direction implements Info{
    LEFT("左"),
    RIGHT("右"){
        //每个枚举对象可以分别重写方法
        public void show(){
            System.out.println("我把它重写了");
        }
    },
    UP("上"),
    DOWN("下");

    private final String name;

    Direction(String name) {
        this.name = name;
    }

    @Override
    public void show() {
        System.out.println(this.name);
    }
}


