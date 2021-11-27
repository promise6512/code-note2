package com.jp.team.service;

import com.jp.team.domain.Architect;
import com.jp.team.domain.Designer;
import com.jp.team.domain.Employee;
import com.jp.team.domain.Programmer;

public class TeamService {
	private int counter = 1;
	private final int  MAX_MEMBER = 5;
	private Programmer[] team = new Programmer[MAX_MEMBER];
	private int total = 0;
	public Programmer[] getTeam() {
		Programmer[] team = new Programmer[total];
		for(int i = 0;i < team.length;i++) {
			team[i] = this.team[i];
		}
		return team;
	}

	public void addMember(Employee e) throws TeamException{
		if(total >= MAX_MEMBER) {
			throw new TeamException("成员已满");
		}
		
		if(!(e instanceof Programmer)) {
			throw new TeamException("该成员不是开发人员");
		}
		
		for(int i = 0;i < total;i++) {
			if(team[i].getId() == e.getId()) {
				throw new TeamException("该成员已在本开发团队中");
			}
		}
		
		Programmer p = (Programmer)e;
		if(p.getStatus().getNAME() == "VOCATION") {
			throw new TeamException("该成员正在休假");
		}
		
		if(p.getStatus().getNAME() == "BUSY") {
			throw new TeamException("该成员在其他开发团队中");
		}
		
		int proNum = 0;
		int desNum = 0;
		int arcNum = 0;
		for(int i = 0;i < total;i++) {
			if(team[i] instanceof Architect) {
				arcNum++;
			}else if(team[i] instanceof Designer) {
				desNum++;
			}else if(team[i] instanceof Programmer) {
				proNum++;
			}
		}
		
		if(p instanceof Architect) {
			if(arcNum >= 1) {
				throw new TeamException("团队中至多只能有一个架构师");
			}
		}else if(p instanceof Designer) {
			if(desNum >= 2) {
				throw new TeamException("团队中至多只能有两个设计师");
			}
		}else if(proNum >= 3 && p instanceof Programmer) {
			if(proNum >= 3) {
				throw new TeamException("团队中至多只能有三个程序员");
			}
		}
		
		
		p.setMemberId(counter++);
		p.setStatus(Status.BUSY);
		team[total++] = p;
	}

	public void removeMember(int memberId) throws TeamException {
		for(int i = 0;i < total;i++) {
			if(team[i].getMemberId() == memberId) {
				//删除成员
				team[i].setStatus(Status.FREE);
				for(int j = i;j<total-1;j++) {
					team[j] = team[j+1];
				}
				team[--total] = null;
				return;
			}
		}
		
		throw new TeamException("未找到开发人员");
	}
}
