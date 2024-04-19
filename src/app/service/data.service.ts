import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Produitt } from '../produitt';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  apiUrl = "http://localhost:8000/api";
  loggedIn: boolean = false;
  // pour recuperer le nom a afficher lors de login
  name!: string;
  public status = 0;
  AllUser: any = [];
  public user_id: any = [];
  reponce: any;
  
  constructor(private httpClient:HttpClient) { }

  getData(){
    return this.httpClient.get<Produitt[]>(`${this.apiUrl}/produit/get`);

  }

  deleteData(id: number){
    return this.httpClient.delete('http://127.0.0.1:8000/api/produit/delete/'+id);
  }
  insertData(data: any) {
    
 return this.httpClient.post('http://127.0.0.1:8000/api/produit/post', data);
  }
  
  updateData(id: number, data: any) {
    return this.httpClient.put('http://127.0.0.1:8000/api/produit/update/' + id, data);
  }

  /*
  registerClient(data:any){
    return this.httpClient.post('http://127.0.0.1:8000/api/inscription', data);
  }
  login(data:any){
    return this.httpClient.post('http://127.0.0.1:8000/api/connexion' , data);
  }
*/
  getOneArticle( id:any ){
    return this.httpClient.get<Produitt>(`${this.apiUrl}/produit/${id}`);
  }
  
  getProductsByIds(ids: number[]) {
    return this.httpClient.get<any[]>(`${this.apiUrl}/products`).pipe(
      map(products => products.filter(product => ids.includes(product.id)))
    );
  }


  // Méthode pour récupérer les produits par catégorie
  getProductsByCategoryId(categoryId: number): Observable<Produitt[]> {
    return this.httpClient.get<Produitt[]>(`${this.apiUrl}/byCategory/${categoryId}`);
  }

}
