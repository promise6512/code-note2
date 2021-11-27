package com.jp.java;
/*
 * main()方法的使用说明：
 * 1. main()方法作为程序的入口
 * 2. main()方法也是一个普通的静态方法
 * 3. main()方法可以作为我们与控制台交互的方式。（之前：使用Scanner）
 */
public class Main {
	public static void main(String[] args) {
		String[] arr = new String[100];
		/*
		for(int i = 0;i < arr.length;i++) {
			arr[i] = "arr_" + i;
			//System.out.println();
		}
		*/
		Main2.main(arr);
	}
}

class Main2 {
	public static void main(String[] args) {
		for(int i = 0;i < args.length;i++) {
			args[i] = "args" + i;
			System.out.println(args[i]);
		}
	}
}