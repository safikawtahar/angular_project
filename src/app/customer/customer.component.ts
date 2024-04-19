import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  
  customers: any;

  constructor(private customerService:CustomerService) { }
  ngOnInit(): void {
    this.getUsers();
  }
  getUsers() {
    this.customerService.getUsers().subscribe(res=> {
      this.customers=res;
        } );
}}
