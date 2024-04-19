import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PanierService {
  private _count = new BehaviorSubject<number>(0);
  count$ = this._count.asObservable();

  constructor(private http: HttpClient) { }

  get count(): number {
    return this._count.value;
  }

  incrementCount() {
    this._count.next(this._count.value + 1);
  }
  increment() {
    this._count.next(this._count.value + 1);
  }


  decrement() {
    if (this._count.value > 0) {
      this._count.next(this._count.value - 1);
    }
  }
  // Méthode pour obtenir le nombre d'articles dans le panier
  getCount(): number {
    return this._count.value;
  }


  produits = [
    { id: 1, name: 'Set of 6 round bowls', price: 20, ref: 'BS1' },
    // Ajoutez d'autres articles ici
  ];



  getProduitById(id: number) {
    return this.produits.find(produit => produit.id === id);
  }
  getPanier() {
    return this.http.get<any[]>('http://127.0.0.1:8000/api/getPanier');
  }
}