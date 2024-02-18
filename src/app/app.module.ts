import { NgModule } from '@angular/core';
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
import { HomeDashComponent } from './home-dash/home-dash.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AuthGuard } from './auth.guard';

const appRoutes : Routes =[
{path:'',component:HomeDashComponent  ,
canActivate:[AuthGuard]},

{path:'produit',component:ProduitComponent  },
{path:'register',component:RegisterComponent },
{path:'login',component:LoginComponent  }

];
@NgModule({
  declarations: [
    AppComponent,
    ProduitComponent,
    NgModalContentComponent,
    LoginComponent,
    RegisterComponent,
    HomeDashComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule ,
    ToastrModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
