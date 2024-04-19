import { Component,Input,OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import {Produitt} from 'src/app/produitt'
import { FormsModule } from '@angular/forms'; 
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { NgModalContentComponent } from '../ng-modal-content/ng-modal-content.component';
import { CategorieService } from 'src/app/categorie.service';
import { HomeDashComponent, HomeDashModule } from '../home-dash/home-dash.component';


@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {
  imageDirectory = "http://localhost:8000/images/articles/";

produits:any;
produitt = new Produitt() ;
showForm: boolean = false;
selectedProduct: any;
categories: any;
categorie: any;
editForm = false;
oneArticle = false;
selectedFile: any;

articles: any;

article: any;
@Input()
searchText: string = '';

 constructor(private dataService:DataService,private modalService: NgbModal,private categorieService: CategorieService){}

ngOnInit():void{
 this.getProduitData();
 this.getCategories(); // Récupérer les catégories au chargement du composant

}

getProduitData(){
  this.dataService.getData().subscribe(res=> {
this.produits=res;
  } );
}
 // Méthode pour récupérer les catégories depuis le service
 getCategories() {
  this.categorieService.getCategories().subscribe(response => {
    console.log(this.categories);

    this.categories = response; // Assigner les catégories récupérées à la variable 'categories'
  });
}
deleteData(id: number){ 
   this.dataService.deleteData(id).subscribe(res=> {
  this.getProduitData();
    } );
  }
  insertData(){
    this.dataService.insertData(this.produitt).subscribe(res=> {
      this.getProduitData();
      this.showForm = false; // Masquer le formulaire après l'ajout

    } )
  }
  openUpdateModal(product: any) {
    const options: NgbModalOptions = { size: 'lg' };
    const modalRef = this.modalService.open(NgModalContentComponent, options);
    modalRef.componentInstance.product = { ...product };
    modalRef.result.then(
      (result) => {
        // Logique après la fermeture de la modal (par exemple, recharger les données)
        this.getProduitData();
      },
      (reason) => {
        // Logique si la modal est fermée de manière inattendue (par exemple, appuyer sur Échap)
      }
    );
  }
  toggleForm() {
    this.showForm = !this.showForm; // Inverser la visibilité du formulaire
    console.log('Valeur de showForm :', this.showForm); // Ajoutez cette ligne pour vérifier la valeur de showForm

  }
  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }
  openCreateModal() {
    const options: NgbModalOptions = { size: 'lg' };
    const modalRef = this.modalService.open(NgModalContentComponent, options);
    modalRef.componentInstance.product = new Produitt(); // Initialiser pour la création
    modalRef.result.then(
      (result) => {
        // Logique après la fermeture de la modal (par exemple, recharger les données)
        this.getProduitData();
      },
      (reason) => {
        // Logique si la modal est fermée de manière inattendue (par exemple, appuyer sur Échap)
      }
    );
  }
  
  getOneArticle(id: any) {
    this.dataService.getOneArticle(id).subscribe(reponse => {
      this.article = reponse;
      this.article = this.article.article;
      this.article.created_at = new Date(this.article.created_at).toISOString().slice(0, 16).replace('T', ' ');
      this.categorie = reponse;
      this.categorie = this.categorie.categorie;
    })
  }
}
