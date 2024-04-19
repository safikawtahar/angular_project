import { Component } from '@angular/core';
import { PanierService } from '../panier.service';
@Component({
  selector: 'app-kitchen',
  templateUrl: './kitchen.component.html',
  styleUrls: ['./kitchen.component.css']
})
export class KitchenComponent {


  imagesUrls: string[] = [
    'assets/img/socciete/p1.png',
    'assets/img/socciete/p2.png',
    'assets/img/socciete/p25.png',
    'assets/img/socciete/40.png',
    'assets/img/socciete/p31.png',
    'assets/img/socciete/p19.png',
    'assets/img/socciete/p34.png',
    'assets/img/socciete/p36.png',
    'assets/img/socciete/p32.png',


    // Ajoutez autant d'URLs que nécessaire
  ]; 
  toggleColor(link: string) {
    this.resetColors(); // Réinitialise toutes les couleurs
    switch (link) {
  
      case 'panier':
        this.isPanierClicked = true;
        break;

    }
  }

  resetColors() {

    this.isPanierClicked = false;

  }

  isPanierClicked: boolean = false;
  isImageVisible: boolean = false;

  toggleImage(): void {
    this.isImageVisible = !this.isImageVisible;
  }
  isFullscreen: boolean = false;

  currentImageUrl: string = '';
  fullscreenImage: string = '';

  toggleFullscreen(imageUrl: string): void {
    this.isFullscreen = !this.isFullscreen;
    this.currentImageUrl = imageUrl;
  }
  constructor(private panierService: PanierService) { }

  addToCart() {
    this.panierService.incrementCount();
  }
}

