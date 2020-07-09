import { Component, OnInit } from '@angular/core';

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

  ngOnInit(): void {
    this.Designation = "Team Leader";
    this.Username = "Scott Smith";
    this.NoOfTeamMembers = 50;
    this.TotalCostOfAllProjects = 456000;
    this.PendingTasks = 30;
    this.UpcomingProjects = 15;
    this.ProjectCost = 678900;
    this.CurrentExpenditure = 1234;
    this.AvailableFunds = 4321;
  }

}
