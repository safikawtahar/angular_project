import { Component } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { PanierService } from '../panier.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isHomeClicked: boolean = false;
  isAboutClicked: boolean = false;
  isProductsClicked: boolean = false;
  isPanierClicked: boolean = false;
  isContactClicked: boolean = false;

  toggleColor(link: string) {
    this.resetColors(); // Réinitialise toutes les couleurs
    switch (link) {
      case 'home':
        this.isHomeClicked = true;
        break;
      case 'about':
        this.isAboutClicked = true;
        break;
      case 'products':
        this.isProductsClicked = true;
        break;
      case 'panier':
        this.isPanierClicked = true;
        break;
      case 'contact':
        this.isContactClicked = true;
        break;
      default:
        break;
    }
  }

  resetColors() {
    this.isHomeClicked = false;
    this.isAboutClicked = false;
    this.isProductsClicked = false;
    this.isPanierClicked = false;
    this.isContactClicked = false;
  }
  constructor(private router: Router , public panierService: PanierService) {}
  navigateToSearch() {
    this.router.navigate(['/search']);
  }

}




