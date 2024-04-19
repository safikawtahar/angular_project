import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl = "http://localhost:8000/api";
  loggedIn: boolean = false;
  // pour recuperer le nom a afficher lors de login
  name!: string;
  public status = 0;
  AllUser: any = [];
  public user_id: any = [];
  reponce: any;
  constructor(private htttpClient: HttpClient) {
  }
  register(data: any) {
    
    this.loggedIn = true;
    this.name = data.name;
    this.user_id = data.id;
    return  this.htttpClient.post(`${this.apiUrl}/inscription`, data);
  }
  login(data: any) {
    this.loggedIn = true;
    this.status = 1;
    return this.htttpClient.post(`${this.apiUrl}/connexion`, data);
  }
  logout() {
    this.loggedIn = false;
    this.status = 0;
    return this.htttpClient.get(`${this.apiUrl}/logout`);
  }
  users() {
    return this.htttpClient.get(`${this.apiUrl}/allUsers`);
  }
  Sign() {
    return this.loggedIn;
  }
  reset() {
  }
  getUserName() {
    return this.name;
  }
 }