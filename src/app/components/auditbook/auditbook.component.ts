import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auditbook',
  templateUrl: './auditbook.component.html',
  styleUrls: ['./auditbook.component.scss']
})
export class AuditbookComponent implements OnInit {
  data: any;

  constructor() { }

  ngOnInit() {
    this.data = {
      labels: ['Principal','Interest','Total'],
      datasets: [
          {
              data: [300, 50, 350],
              backgroundColor: [
                  "#FF6384",
                  "#36A2EB",
                  "#FFCE56"
              ],
              hoverBackgroundColor: [
                  "#FF6384",
                  "#36A2EB",
                  "#FFCE56"
              ]
          }]    
      };
  }

}
