import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private httpClient:HttpClient) { }
  getUsers() {
    return this.httpClient.get<any[]>('http://127.0.0.1:8000/api/getUsers');
  }
}