import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { DataService } from '../service/data.service'; // Assurez-vous que le chemin est correct
import {  OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-modal-content',
  templateUrl: './ng-modal-content.component.html',
  styleUrls: ['./ng-modal-content.component.css']
})
export class NgModalContentComponent implements OnInit{
  showForm: boolean = false; // Déclaration de showForm

  @Input() product: any;

 constructor(public modal: NgbActiveModal,private dataService: DataService) {}
 ngOnInit(): void {}
 
 saveData() {
  if (this.product && this.product.id) {
    // Utilisez this.dataService.updateData() avec l'ID du produit et les nouvelles données
    this.dataService.updateData(this.product.id, this.product).subscribe(
      (res) => {
        console.log('Données mises à jour avec succès:', res);
        // Ajoutez une logique supplémentaire si nécessaire

        // Fermez la modal après la mise à jour
        this.modal.close();
      },
      (error) => {
        console.error('Erreur lors de la mise à jour des données:', error);
        // Gérez l'erreur de mise à jour, affichez un message à l'utilisateur, etc.
      }
    );
  } else {
    // Utilisez this.dataService.insertData() pour créer un nouveau produit
    this.dataService.insertData(this.product).subscribe(
      (res) => {
        console.log('Produit créé avec succès:', res);
        // Ajoutez une logique supplémentaire si nécessaire

        // Fermez la modal après la création
        this.modal.close();
      },
      (error) => {
        console.error('Erreur lors de la création du produit:', error);
        // Gérez l'erreur de création, affichez un message à l'utilisateur, etc.
      }
    );
  }
}
}