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

  Clients: string[];
  Projects: string[];
  Years: number[] = [];
  TeamMembersSummary: any[];
  TeamMembers: any [];

  Today: Date;

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

    this.Clients = [
      "ABC", "PQR", "XYZ"
    ];
    this.Projects = [
      "Project A", "Project B", "Project C", "Project D"
    ];

    for(let year = 2020; year >= 2015; year--) {
      this.Years.push(year);
    }

    this.TeamMembersSummary = [
      { Region: "East", TeamMembersCount: "20", UnavailableMembers: "8" },
      { Region: "South", TeamMembersCount: "15", UnavailableMembers: "6" },
      { Region: "West", TeamMembersCount: "10", UnavailableMembers: "4" },
      { Region: "North", TeamMembersCount: "5", UnavailableMembers: "2" }
    ];

    this.TeamMembers = [
      {
        Region: "East", Members: [
          { id: 1, name: "Jonas", status: "Available" },
          { id: 2, name: "Martha", status: "Available" },
          { id: 3, name: "Adam", status: "Available" },
          { id: 4, name: "Mikkel", status: "Available" }
        ]
      },
      {
        Region: "South", Members: [
          { id: 5, name: "Hannah", status: "Available" },
          { id: 6, name: "Charlotte", status: "Busy" },
          { id: 7, name: "Ulrich", status: "Available" },
          { id: 8, name: "Katharina", status: "Busy" }
        ]
      },
      {
        Region: "West", Members: [
          { id: 9, name: "Agnes", status: "Available" },
          { id: 10, name: "Ines", status: "Available" },
          { id: 11, name: "Helge", status: "Busy" },
          { id: 12, name: "Aleksander", status: "Busy" }
        ]
      },
      {
        Region: "North", Members: [
          { id: 13, name: "Elisabeth", status: "Busy" },
          { id: 14, name: "Clausen", status: "Busy" },
          { id: 15, name: "Udo", status: "Available" },
          { id: 16, name: "Clara", status: "Available" }
        ]
      }
    ];
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
