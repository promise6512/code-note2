package com.jp.java3;

import org.junit.Test;

/*
 * 包装类的使用
 *   1.java提供了8种数据类型对应的包装类,使得基本数据类型的变量具有类的特征
 *   2.基本数据类型,包装类,String之间的相互转换
 * */
public class Wrapper {
	
	@Test
	//基本数据类型--->包装类:调用包装类的构造器
	public void test() {
		int num1 = 10;
		//System.out.println(num1.toString());
		Integer in1 = new Integer(num1);
		System.out.println(in1.toString());
		
		Integer in2 = new Integer("123");
		System.out.println(in2);		
		
		//Integer in3 = new Integer("123a");  传入的字符串参数必须只包含数字
		//System.out.println(in3.toString());	
		
		Float f1 = new Float(12.3f);
		Double d1 = new Double(12.3);
		System.out.println(f1);
		System.out.println(d1);
		
		Boolean b1 = new Boolean(true);
		Boolean b2 = new Boolean("TrUe");
		Boolean b3 = new Boolean("true12");
		System.out.println(b1);  //true
		System.out.println(b2);  //true
		System.out.println(b3);  //false
		
		Order order = new Order();
		System.out.println(order.isMale);  //false
		System.out.println(order.isFemale);  //null
	}
	
	//包装类--->基本数据类型:调用包装类的xxxValue
    @Test
    public void test2() {
    	Integer in1 = new Integer(12);
    	int i1 = in1.intValue();
    	
    	Float fl1 = new Float(12.3f);
    	float f1 = fl1.floatValue();
    	float sum = i1 + f1;
    	System.out.println(sum);
    }
    
    /*
     * 新特性:自动装箱与自动拆箱
     * */
    @Test
    public void test3() {
    	int num1 = 10;
    	method(num1);
    	
    	//自动装箱:基本数据类型自动转化为相应的包装类,无需进行"new"
    	Integer num2 = 10;
    	Integer in1 = num2;
    	
    	boolean b1 = true;
    	Boolean b2 = b1;
    	
    	//自动拆箱:包装类转换为相应的数据类型
    	int num3 = in1;
    	System.out.println(num3);
    }
    public void method(Object obj) {
    	System.out.println(obj);
    	
    }
    
    //基本数据类型/包装类--->String类型:
    @Test
    public void test4() {
    	//方式一:连接运算
    	int num1 = 10;
    	String str1 = num1 + "";
    	Integer in1 = 10;
    	String str2 = in1 + "";
    	
    	float f1 = 12.3f;
    	String str3 = String.valueOf(f1);
    	Double d1 = new Double(12.3);
    	String str4 = String.valueOf(d1);
    }
    
    //String类型--->基本数据类型、包装类:调用包装类的parseXxx(String s)
    @Test 
    public void test5() {
    	String str1 = "123";
    	int num1 = Integer.parseInt(str1);
    	System.out.println(num1);
    	String str2 = "true";
    	boolean b1 = Boolean.parseBoolean(str2);
    	System.out.println(b1);
    }
}
    
    
class Order{
	boolean isMale;
	Boolean isFemale;
}









