package com.jp.java;
/*
 * 向下转型的使用
 *    有了多态性之后 内存中实际上是加载了子类特有的属性和方法，但是由于变量声明为父类 导致编译时只能调用
 *    父类声明的属性和方法
 *     
 * */
public class DownCast {
	public static void main(String[] args) {
		Person p = new Man();
		//将父类转换为子类(向下转型)
		Man man = (Man)p;
		//此时可以调用子类的属性和方法
		man.earnMoney();
		man.isSmoking = true;
		
        System.out.println(man instanceof Man); //true
        System.out.println(man instanceof Person);
        System.out.println(p instanceof Man); //true
        System.out.println(p instanceof Person);
        System.out.println(p instanceof Woman);
		/*
		 * instanceof关键字的使用
		 * 
		 * a instanceof A:判断对象a是否是类A的实例。如果是，返回true；如果不是，返回false。
		 * 
		 * 
		 *  使用情境：为了避免在向下转型时出现ClassCastException的异常，我们在向下转型之前，先
		 *  进行instanceof的判断，一旦返回true，就进行向下转型。如果返回false，不进行向下转型。
		 *  
		 *  如果 a instanceof A返回true,则 a instanceof B也返回true.
		 *  其中，类B是类A的父类。
		 */
		
		 //问题一:编译时通过 运行时不通过
          //Person p3 = new Woman();
         //Man m3 = (Man)p3;
        
        //Person p1 = new Person();
		//Man m1 = (Man)p1;
        
        //问题二:编译通过 运行也通过
        Object obj = new Woman();
        Person p2 = (Person)obj;
      
        //问题三:编译不过
       // Man m5 = new Woman();
	}
}






