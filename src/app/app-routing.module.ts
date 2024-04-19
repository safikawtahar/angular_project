import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ArtComponent } from './art/art.component';
import { SearchInterfaceComponent } from './search-interface/search-interface.component';
import { PanierService } from './panier.service';
import { ProductsComponent } from './products/products.component';
import { KitchenComponent } from './kitchen/kitchen.component';
import { CartComponent } from './cart/cart.component';
import { CategorieComponent } from './categorie/categorie.component';
import { ContentComponent } from './content/content.component';
import { DetaillsComponent } from './detaills/detaills.component';

const routes: Routes = [
  {path:' ',component:HeaderComponent},
  {path:'home',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactComponent},
  {path:'art',component:ArtComponent},
  {path:'products',component:ProductsComponent},
  {path:'products/kitchen_Accessories',component:KitchenComponent},

  { path: "cart", component: CartComponent },
  { path: "cart/:id", component: CartComponent },

  {path:'search',component:SearchInterfaceComponent},

  {path:'panier/service',component:PanierService },
  { path: "categories", component: CategorieComponent },

  { path: "content", component: ContentComponent },
  { path: "dettails/:id", component: DetaillsComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
