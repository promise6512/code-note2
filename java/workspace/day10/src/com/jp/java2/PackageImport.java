package com.jp.java2;

import java.lang.reflect.Field;
import java.util.ArrayList;

/*
 * package关键字的使用
 *    1.为了更好实现项目中类的管理，提供包的概念
 *    2.使用package声明类或接口所属的包，声明在源文件的首行
 *    3.包，属于标识符，遵循标识符的命名规则、规范
 *    4.每"."一次 就代表一层目录
 *    
 *    补充:同一个包下不能命名同名的接口、类
 * 
 * Import关键字的使用
 *    1.在源文件显式的使用import结构导入指定包下的类、接口
 *    2.声明在包的声明和类的声明之间
 *    3.如果需要导入多个结构 则并列写出即可
 *    4.可以使用"xxx.*"的方式导入xxx包下的所有结构
 *    5.如果使用的类或接口是java.lang包下定义的 则可以省略import结构
 *    6.如果使用的类或接口是本包下定义的，则可以省略import结构
 *    7.如果在源文件中,使用了不同包下的同名的类,则必须至少一个类以全类名的方式显示
 *    8.使用"xxx.*"的方式可以调用xxx包下的所有结构 但是如果使用的是xxx子包下的结构，则仍需要导入
 * 
 *  */
public class PackageImport {
	public static void main(String[] args) {
		Field field = null;
		com.jp.java2.Keyword_this keyword_this = new com.jp.java2.Keyword_this();
		ArrayList arrayList = new ArrayList();
	}
}
