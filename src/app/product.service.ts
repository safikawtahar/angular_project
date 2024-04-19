import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Produitt } from './produitt';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private produitsSubject: BehaviorSubject<Produitt[]> = new BehaviorSubject<Produitt[]>([]);
  public produits$: Observable<Produitt[]> = this.produitsSubject.asObservable();

  constructor() {}

  updateProduits(produits: Produitt[]): void {
    this.produitsSubject.next(produits);
  }

  addProduit(produit: Produitt): void {
    const produits = this.produitsSubject.value;
    produits.push(produit);
    this.produitsSubject.next(produits);
  }
}
