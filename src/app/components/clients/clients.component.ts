import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/models/client.model';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {
  public clients : Client[];

  constructor() { }

  ngOnInit() {

    this.clients = [
      {id: "12345", firstName: "Linga", lastName: "Annela", email : "alreddy@ashta.com", phoneNo: "987-987-1230" },
      {id: "12345", firstName: "Linga", lastName: "Annela", email : "alreddy@ashta.com", phoneNo: "987-987-1230" },
      {id: "12345", firstName: "Linga", lastName: "Annela", email : "alreddy@ashta.com", phoneNo: "987-987-1230" },
      {id: "12345", firstName: "Linga", lastName: "Annela", email : "alreddy@ashta.com", phoneNo: "987-987-1230" }
  ];
  }

}
