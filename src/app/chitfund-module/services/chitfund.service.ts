import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ChitfundService {

  constructor(private http: HttpClient) {}

  getChitfunds() {
    return this.http.get<{ count: any; chitfunds: any[] }>(
      'http://localhost:3000/api/clients'
    );
  }

}
