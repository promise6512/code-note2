package com.jp.team.view;

import com.jp.team.service.NameListService;
import com.jp.team.domain.Employee;
import com.jp.team.domain.Programmer;
import com.jp.team.service.*;
public class TeamView {
	NameListService listSvc = new NameListService();
	TeamService teamSvc = new TeamService();
	public void enterMainMenu() {
		boolean loopFlag = true;
		char key = 0;
		
		do {
			if(key != '1') {
				listAllEmployees();
			}
			
			System.out.println("1-团队列表  2-添加团队成员  3-删除团队成员 4-退出   请选择(1-4)：");
			key = TSUtility.readMenuSelection();
			switch(key) {
			case '1':
				getTeam();
				break;
			case '2':
				addMember();
				break;
			case '3':
				DeleteMember();
				break;
			case '4':
				System.out.print("确认是否退出(Y/N)：");
				char isExit = TSUtility.readConfirmSelection();
				if(isExit == 'Y'){
					loopFlag = false;
				}
				break;
			default:
				System.out.println("请输入1-4之间的数字");
			}
			
		}while(loopFlag);
		
	}
	
	
	public void listAllEmployees() {
	//	System.out.println(1);
		System.out.println("\n-------------------------------开发团队调度软件--------------------------------\n");
		Employee[] employees =  listSvc.getAllEmployees();
		for(int i = 0;i<employees.length;i++) {
			System.out.println(employees[i].toString());
		}
		System.out.println("-------------------------------------------------------------------------------");
		
	}
	
	public void getTeam() {
		System.out.println("\n--------------------团队成员列表---------------------\n");
		Programmer[] team = teamSvc.getTeam();
		if(team.length == 0) {
			System.out.println("该团队没有开发人员");
		}else {
			System.out.println("TID/ID\t姓名\t年龄\t工资\t职位\t奖金\t股票");
			for(int i = 0;i < team.length;i++) {
				System.out.println(team[i].getMemberId()+"/"+team[i].toString());
			}
		}
	}
	
	public void addMember() {
		System.out.println("---------------------添加成员---------------------");
		System.out.print("请输入要添加的员工ID：");
		int key = TSUtility.readInt();
		//Employee[] employees = listSvc.getAllEmployees();
		//Employee employee = null;
		//for(int i = 0;i < employees.length;i++) {
		//	if(employees[i].getId() == key) {
		//		employee = employees[i];
		//	}
		//}
		
		try {
			Employee employee = listSvc.getEmployee(key);
			teamSvc.addMember(employee);
			System.out.println("添加成功,按回车继续");
			TSUtility.readReturn();
		}catch(TeamException e) {
			System.out.println(e.getMessage());
			System.out.println("添加失败,按回车继续");
			TSUtility.readReturn();
		}
	}
	
	public void DeleteMember() {
		System.out.println("---------------------删除成员---------------------");
		System.out.print("请输入要删除员工的TID：");
		int key = TSUtility.readInt();
		try {
			teamSvc.removeMember(key);
			System.out.println("删除成功,按回车继续");
			TSUtility.readReturn();
		}catch(TeamException e) {
			System.out.println(e.getMessage());
			System.out.println("删除失败,按回车继续");
			TSUtility.readReturn();
		}
	}
	
	public static void main(String[] args) {
		TeamView teamView = new TeamView();
		teamView.enterMainMenu();
	}
}













