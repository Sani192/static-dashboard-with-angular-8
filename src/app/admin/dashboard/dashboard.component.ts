import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  Designation: string;
  Username: string;
  NoOfTeamMembers: number;
  TotalCostOfAllProjects: number;
  PendingTasks: number;
  UpcomingProjects: number;
  ProjectCost: number;
  CurrentExpenditure: number;
  AvailableFunds: number;
  Today: Date;

  Clients: string[];
  Projects: string[];
  Years: number[] = [];
  TeamMembersSummary: any[];
  TeamMembers: any [];

  constructor(private dashboardService: DashboardService) {
  }

  ngOnInit(): void {
    this.Designation = "Team Leader";
    this.Username = "Scott Smith";
    this.NoOfTeamMembers = 50;
    this.TotalCostOfAllProjects = 456000;
    this.PendingTasks = 30;
    this.UpcomingProjects = 0.45;
    this.ProjectCost = 66666;
    this.CurrentExpenditure = 1111;
    this.AvailableFunds = 9988;
    this.Today = new Date();

    this.Years = this.dashboardService.getYears();
    this.Clients = this.dashboardService.getClients();
    this.Projects = this.dashboardService.getProjects();
    this.TeamMembersSummary = this.dashboardService.getTeamMembersSummary();
    this.TeamMembers = this.dashboardService.getTeamMembers();
  }

  onProjectChange(event) {
    if(event.target.innerHTML == 'Project A') {
      this.ProjectCost = 66666;
      this.CurrentExpenditure = 1111;
      this.AvailableFunds = 9988;
    } else if(event.target.innerHTML == 'Project B') {
      this.ProjectCost = 77777;
      this.CurrentExpenditure = 2222;
      this.AvailableFunds = 7766;
    }  else if(event.target.innerHTML == 'Project C') {
      this.ProjectCost = 88888;
      this.CurrentExpenditure = 3333;
      this.AvailableFunds = 5544;
    }  else if(event.target.innerHTML == 'Project D') {
      this.ProjectCost = 99999;
      this.CurrentExpenditure = 4444;
      this.AvailableFunds = 3322;
    }
  }
}
