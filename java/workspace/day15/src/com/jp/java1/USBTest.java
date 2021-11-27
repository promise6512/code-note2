package com.jp.java1;

public class USBTest {
	public static void main(String[] args) {
		Computer com = new Computer();
		Flash flash = new Flash();
		//1.创建了接口的非匿名实现类的非匿名对象
		com.transferData(flash);
		
		//2. 创建了接口的非匿名实现类的匿名对象
		com.transferData(new Printer());
		
		//3.创建了接口的匿名实现类的非匿名对象
		USB mouse = new USB() {
			@Override
			public void start() {
				System.out.println("鼠标设备开始工作");
			}
			@Override
			public void end() {
				System.out.println("鼠标设备开始工作");
			}
		};
		com.transferData(mouse);
		//4.创建匿名实现类的匿名对象
		com.transferData(new USB(){
			@Override
			public void start() {
				System.out.println("匿名设备开始工作");
			}
			@Override
			public void end() {
				System.out.println("匿名设备停止工作");
			}
		});
	}
}

class Computer{
	public void transferData(USB usb) {
		usb.start();
		System.out.println("具体传输数据细节");
		usb.end();
	}
}

interface USB{
	abstract public void start();
	abstract public void end();
}

class Flash implements USB{
	@Override
	public void start() {
		System.out.println("Flash开始工作");
	}

	@Override
	public void end() {
		System.out.println("Flash停止工作");
	}
}

class Printer implements USB{
	@Override
	public void start() {
		System.out.println("Printer开始工作");
	}
	@Override
	public void end() {
		System.out.println("Printer停止工作");
	}
	
}




