package com.jp.p2.UI;

import com.jp.p2.bean.Customer;
import com.jp.p2.service.CustomerList;
import com.jp.p2.util.CMUtility;

public class CustomerView {
	private CustomerList customerList = new CustomerList(10);
	//初始化客户列表
	public CustomerView() {
		Customer cust = new Customer("张三",'男',35,"19817866510","123@qq.com");
		customerList.addCustomer(cust);
	}
	public void enterMainMenu() {
		boolean isFlag = true;
		while(isFlag) {
			System.out
			.println("\n-----------------客户信息管理软件-----------------\n");
	        System.out.println("                   1 添 加 客 户");
	        System.out.println("                   2 修 改 客 户");
	        System.out.println("                   3 删 除 客 户");
	        System.out.println("                   4 客 户 列 表");
	        System.out.println("                   5 退       出\n");
	        System.out.print("                   请选择(1-5)：");
	        char menu = CMUtility.readMenuSelection();
	        switch(menu) {
	            case '1':
	        	   this.addNewCustomer();
	        	   break;
	            case '2':
	               this.modifyCustomer();
	               break;
	            case '3':
	            	this.deleteCustomer();;
	            	break;
	            case '4':
	            	this.listAllCustomers();
	            	break;
	            case '5':
	            	System.out.print("是否确定退出(Y/N)");
	            	char isExit = CMUtility.readConfirmSelection();
	            	if(isExit == 'Y') {
	            		isFlag = false;
	            	}
	            	
	            	break;
	        }
		}
		
	}
	private void addNewCustomer() {
		System.out.println("---------------------添加客户---------------------");
		System.out.print("姓名:");
		String name = CMUtility.readString(4);
		System.out.print("性别:");
		char gender = CMUtility.readChar('男');
		System.out.print("年龄:");
		int age = CMUtility.readInt(25);
		System.out.print("电话:");
		String phone = CMUtility.readString(11);
		System.out.print("email:");
		String email = CMUtility.readString(25);
		Customer cust = new Customer(name,gender,age,phone,email);
		customerList.addCustomer(cust);
	} 
	private void modifyCustomer() {
		System.out.println("---------------------修改客户---------------------");
		Customer cust;
		for(;;) {
			System.out.print("请选择待修改客户编号(-1退出)：");
			int number = CMUtility.readInt();
			if(number == -1) {
				return;
			}
			
			cust = customerList.getCustomer(number-1);
			if(cust == null) {
				System.out.println("无法找到指定的客户");
			}else {//找到了相应的客户
				break;
			}	
		}
		System.out.print("姓名("+cust.getName()+")");
		String name = CMUtility.readString(10, cust.getName());
		System.out.print("性别("+cust.getGender()+")");
		char gender = CMUtility.readChar(cust.getGender());
		System.out.print("年龄("+cust.getAge()+")");
		int age = CMUtility.readInt(cust.getAge());
		System.out.print("电话("+cust.getPhone()+")");
		String phone = CMUtility.readString(11, cust.getPhone());
		System.out.print("email("+cust.getEmail()+")");
		String email = CMUtility.readString(30, cust.getEmail());
		cust.setName(name);
		cust.setGender(gender);
		cust.setAge(age);
		cust.setPhone(phone);
		cust.setEmail(email);
		
	}
	private void deleteCustomer() {
		 System.out.println("---------------------------删除客户---------------------------");
		 int number;
		 for(;;) {
			 System.out.print("请选择待修改客户编号(-1退出)：");
			 number = CMUtility.readInt();
			 if(number == -1) {
				 return;
			 }
			 Customer cust = customerList.getCustomer(number-1);
			 if(cust == null) {
				 System.out.print("无法找到指定客户");
			 }else {
				 System.out.print("是否确定退出(Y/N)");
				 char isDelete = CMUtility.readConfirmSelection();
				 if(isDelete == 'Y') {
					 customerList.deleteCustomer(number-1);
				 }
				 break;
			 }
		 }
	}
	private void listAllCustomers() {
		 System.out.println("---------------------------客户列表---------------------------");
		 Customer[] custs = customerList.getAllCustomers();
		 if(custs.length == 0) {
			 System.out.println("没有客户信息");
		 }else{
			 System.out.println("编号\t姓名\t性别\t年龄\t\t电话\t\t邮箱");
			 for(int i = 0;i < custs.length;i++) {
				 System.out.println(i+1+"\t"+custs[i].getDetail());
			 }
		 }
		 System.out.println("-------------------------客户列表完成-------------------------");
	}
	public static void main(String[] args) {
		CustomerView view = new CustomerView ();
		view.enterMainMenu();
	}

}
