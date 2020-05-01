import { Component, OnInit } from '@angular/core';
import { chitDetails } from '../../mock.data';

@Component({
  selector: 'app-chitfund-details',
  templateUrl: './chitfund-details.component.html',
  styleUrls: ['./chitfund-details.component.scss']
})
export class ChitfundDetailsComponent implements OnInit {
  chitDetails!: any;

  constructor() { }

  ngOnInit() {
    this.chitDetails = chitDetails;
  }

}
