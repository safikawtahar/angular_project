import { Component, OnInit } from '@angular/core';
import { PanierService } from 'src/app/panier.service';
@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
  export class OrdersComponent implements OnInit {

  
    paniers: any;
  
    constructor(private panierService:PanierService) { }
    ngOnInit(): void {
      this.getPanier();
    }
    getPanier() {
      this.panierService.getPanier().subscribe(res=> {
        this.paniers=res;
          } );
  }
}

