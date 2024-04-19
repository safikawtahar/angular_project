import { Component, OnInit } from '@angular/core';
import { CategorieService } from 'src/app/categorie.service';
import { Router } from '@angular/router'; // Importez Router depuis Angular

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent {
  categories: any;

  constructor(private categorieService: CategorieService,private router: Router) { }

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories() {
    this.categorieService.getCategories().subscribe(response => {
      this.categories = response;
    });
  }
  navigateToCategory(categoryName: string) {
    // Utilisez le Router pour naviguer vers le chemin approprié en fonction du nom de la catégorie
    switch (categoryName) {
      case 'Bowls':
        this.router.navigate(['products/Bowls']);
        break;
      case 'Kitchen Accessories':
        this.router.navigate(['products/kitchen_Accessories']);
        break;
        case 'Table Top':
        this.router.navigate(['products/Table_Top']);
        break;
      // Ajoutez d'autres cas pour d'autres catégories si nécessaire
      default:
        break;
    }
  }
}

