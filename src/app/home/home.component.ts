import { Component } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { OnInit } from '@angular/core';
import Swiper from 'swiper';
import { trigger, state, style, animate, transition } from '@angular/animations';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],

  animations: [
    trigger('textAnimation', [
      state('initial', style({
        opacity: 0
      })),
      state('changeText', style({
        opacity: 1
      })),
      transition('initial => changeText', animate('500ms ease-in')),
      transition('changeText => initial', animate('500ms ease-out'))
    ])
  ]
})

export class HomeComponent {
  isLoggedIn = false;

  toggleSidenav(): void {
    // Code pour ouvrir/fermer le menu latéral
  }
  imageUrls: string[] = [
    "assets/img/nov-img/arbres.jpg",
    "assets/img/nov-img/s3.jpg",

  ];
  imageTexts: string[][] = [
    ["-My Olive Wood Gifts-", "Today we are using olive Wood to produce items for kitchen & table, furniture, decor and gift items"],
    ["Olive wood since 1988",   "Today, we are able to produce,supply ans satisfy large customer orders, fast and in high quality."]
 
  ];

  currentImageIndex: number = 0;
  imageUrl: string = this.imageUrls[this.currentImageIndex];
  currentImageTexts: string[] = this.imageTexts[this.currentImageIndex];
  textState: string = 'initial';
  constructor() { }
  


  ngOnInit(): void {
    setInterval(() => {
      this.changeImage();
    }, 30000); // 30 secondes
    // Utilisez let ou const au lieu de var
    const TrandingSlider = new Swiper('.tranding-slider', {
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      loop: true,
      slidesPerView: 'auto',
      coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 2.5,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  }
  changeImage(): void {
    this.currentImageIndex = (this.currentImageIndex + 1) % this.imageUrls.length;
    this.imageUrl = this.imageUrls[this.currentImageIndex];
    this.currentImageTexts = this.imageTexts[this.currentImageIndex];
  }
  nextImage(): void {
    this.currentImageIndex = (this.currentImageIndex + 1) % this.imageUrls.length;
    this.updateImage();
    this.textState = 'changeText';
    setTimeout(() => {
      this.textState = 'initial';
    }, 500);
  }

  prevImage(): void {
    this.currentImageIndex = (this.currentImageIndex - 1 + this.imageUrls.length) % this.imageUrls.length;
    this.updateImage();
    this.textState = 'changeText';
    setTimeout(() => {
      this.textState = 'initial';
    }, 500);
  }

  updateImage(): void {
    this.imageUrl = this.imageUrls[this.currentImageIndex];
    this.currentImageTexts = this.imageTexts[this.currentImageIndex];
  }
  logout() {
    localStorage.removeItem('access_token');
    this.isLoggedIn = false;
  }
  
}


