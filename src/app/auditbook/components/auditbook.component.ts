import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-auditbook',
  templateUrl: './auditbook.component.html',
  styleUrls: ['./auditbook.component.scss']
})
export class AuditbookComponent implements OnInit {
  data: any;

  // tslint:disable-next-line: variable-name
  constructor(private _store: Store<{}>) { }

  ngOnInit() {
    this.data = {
      labels: ['Principal', 'Interest', 'Total'],
      datasets: [
          {
              data: [300, 50, 350],
              backgroundColor: [
                  '#FF6384',
                  '#36A2EB',
                  '#FFCE56'
              ],
              hoverBackgroundColor: [
                  '#FF6384',
                  '#36A2EB',
                  '#FFCE56'
              ]
          }]
      };
  }

}
