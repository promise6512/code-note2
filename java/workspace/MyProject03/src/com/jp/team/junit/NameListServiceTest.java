package com.jp.team.junit;

import org.junit.Test;

import com.jp.team.domain.Employee;
import com.jp.team.service.NameListService;
import com.jp.team.service.TeamException;

public class NameListServiceTest {
	@Test
	public void testGetAllEmployees(){
		NameListService service = new NameListService();
		Employee[] employees = service.getAllEmployees();
		for(int i = 0; i < employees.length;i++) {
			System.out.println(employees[i].toString());
		}
	}
	
	@Test
	public void testGetEmployee() {
		NameListService service = new NameListService();
		try {
			Employee employee = service.getEmployee(100);
			System.out.println(employee.toString());
		}catch(TeamException e) {
			System.out.println(e.getMessage());
		}
		
	}
}
