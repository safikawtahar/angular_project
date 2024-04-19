import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule ,Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProduitComponent } from './produit/produit.component';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule ,ReactiveFormsModule } from '@angular/forms';
import { NgModalContentComponent } from './ng-modal-content/ng-modal-content.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AuthGuard } from './auth.guard';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ArtComponent } from './art/art.component';
import { WelcomComponent } from './welcom/welcom.component';
import { ListeComponent } from './liste/liste.component';
import { SearchInterfaceComponent } from './search-interface/search-interface.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { IonicModule } from '@ionic/angular';
import { ProductsComponent } from './products/products.component';
import { KitchenComponent } from './kitchen/kitchen.component';
import { HomeDashComponent, HomeDashModule } from './home-dash/home-dash.component';
import { CustomerComponent } from './customer/customer.component';
import { CartComponent } from './cart/cart.component';
import { CategorieComponent } from './categorie/categorie.component';
import { ContentComponent } from './content/content.component';
import { DetaillsComponent } from './detaills/detaills.component';
import { OrdersComponent } from './orders/orders.component';

const appRoutes : Routes =[
{path:'dashboard',component:HomeDashComponent  ,
canActivate:[AuthGuard]},
{ path : '', component: HomeComponent},

{path:'produit',component:ProduitComponent  },
{path:'register',component:RegisterComponent },
{path:'login',component:LoginComponent  },
{ path: 'customers', component: CustomerComponent },
{ path: 'panier', component: OrdersComponent }

];
@NgModule({
    declarations: [
        AppComponent,
        ProduitComponent,
        NgModalContentComponent,
        LoginComponent,
        RegisterComponent,
        HomeComponent,
        HeaderComponent,
        FooterComponent,
        ArtComponent,
        WelcomComponent,
        ListeComponent,
        SearchInterfaceComponent,
        ContactComponent,
        AboutComponent,
        ProductsComponent,
        KitchenComponent,
        CustomerComponent,
        CartComponent,
        CategorieComponent,
        ContentComponent,
        DetaillsComponent,
        OrdersComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        ToastrModule.forRoot(),
        RouterModule.forRoot(appRoutes),
        IonicModule.forRoot(),
        CommonModule,
        HomeDashModule
    ]
})
export class AppModule { }
