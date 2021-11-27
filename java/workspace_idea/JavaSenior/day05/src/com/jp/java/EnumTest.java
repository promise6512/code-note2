package com.jp.java;

/**
 * 一、枚举类的使用
 * 1.枚举类的理解：类的对象只有有限个，确定的。我们称此类为枚举类
 * 2.当需要定义一组常量时，强烈建议使用枚举类
 * 3.如果枚举类中只有一个对象，则可以作为单例模式的实现方式。
 *
 * 二、如何定义枚举类
 * 方式一：jdk5.0之前，自定义枚举类
 * 方式二：jdk5.0，可以使用enum关键字定义枚举类
 *
 * 三、Enum类中的常用方法：
 *    values()方法：返回枚举类型的对象数组。该方法可以很方便地遍历所有的枚举值。
 *    valueOf(String str)：可以把一个字符串转为对应的枚举类对象。要求字符串必须是枚举类对象的“名字”。如不是，会有运行时异常：IllegalArgumentException。
 *    toString()：返回当前枚举类对象常量的名称
 *
 * 四、使用enum关键字定义的枚举类实现接口的情况
 *   情况一：实现接口，在enum类中实现抽象方法
 *   情况二：让枚举类的对象分别实现接口中的抽象方法
 *
 * @author shkstart
 * @create 2019 上午 10:17
 */

public class EnumTest {
    public static void main(String[] args) {
        Seanson SPRING = Seanson.SPRING;
        System.out.println(SPRING.toString());
    }
}

//自定义枚举类
class Seanson {
    private String seasonName;
    private String seasonDesc;

    //私有化类的构造器
    private Seanson(String seasonName, String seasonDesc) {
        this.seasonName = seasonName;
        this.seasonDesc = seasonDesc;
    }

    //提供当前枚举类的多个对象
    public static final Seanson SPRING = new Seanson("春天","暖");
    public static final Seanson SUMMER = new Seanson("夏天","热");
    public static final Seanson FALL = new Seanson("秋天","凉");
    public static final Seanson WINTER = new Seanson("冬天","冷");

    @Override
    public String toString() {
        return "Seanson{" +
                "seasonName='" + seasonName + '\'' +
                ", seasonDesc='" + seasonDesc + '\'' +
                '}';
    }
}












