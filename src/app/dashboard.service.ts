import { Injectable } from '@angular/core';

@Injectable()
export class DashboardService {

  getClients(): any[] {
    return ["ABC", "PQR", "XYZ"];
  }

  getProjects(): any[] {
    return ["Project A", "Project B", "Project C", "Project D"];
  }

  getYears(): number[] {
    var years = [];
    for(let year = 2020; year >= 2015; year--) {
      years.push(year);
    }
    return years;
  }

  getTeamMembersSummary(): any[] {
    return [
      { Region: "East", TeamMembersCount: "20", UnavailableMembers: "8" },
      { Region: "South", TeamMembersCount: "15", UnavailableMembers: "6" },
      { Region: "West", TeamMembersCount: "10", UnavailableMembers: "4" },
      { Region: "North", TeamMembersCount: "5", UnavailableMembers: "2" }
    ];
  }

  getTeamMembers(): any[] {
    return [
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
}
