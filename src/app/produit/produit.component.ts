import { Component,OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import {Produitt} from 'src/app/produitt'
import { FormsModule } from '@angular/forms'; 
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { NgModalContentComponent } from '../ng-modal-content/ng-modal-content.component';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {
produits:any;
produitt = new Produitt() ;
showForm: boolean = false;
selectedProduct: any;

 constructor(private dataService:DataService,private modalService: NgbModal){}

ngOnInit():void{
 this.getProduitData();
}

getProduitData(){
  this.dataService.getData().subscribe(res=> {
this.produits=res;
  } );
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
  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      this.produitt.Image_Produit = file; // Stockez le fichier dans la propriété Image_Produit
    }
  }
  toggleForm() {
    this.showForm = !this.showForm; // Inverser la visibilité du formulaire
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
  
}
