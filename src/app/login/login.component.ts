import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../models/user';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  User: User = {
    name: '',
    email: '',
    password: '',
    num_tel: '',
    Adresse: ''
  }
  loginForm = true;
  data: any;
  isadmin: boolean = false;
  messageError: any;
  static login_name: string
  status!: any;
  constructor(public authService: AuthService, private router: Router, private route: ActivatedRoute) { }
  ngOnInit(): void {
  }
  login() {
    this.authService.login(this.User).subscribe((reponse: any) => {
      this.authService.loggedIn = true;
      this.data = reponse;
      
      // Vérifiez si l'objet data est défini avant d'accéder à sa propriété id
      if (this.data?.user?.id) { 
        this.authService.user_id = this.data.user.id;
      }
      
      if (this.data.status == 1)
        this.authService.name = this.data.user.name;
      this.reset();
      
      this.status = this.data.status;
      this.authService.status = this.status;
      if (this.data.status == 1)
        this.User = this.data.user;
      if (this.User.email == "admin@gmail.com")
        this.router.navigate(['/dashboard']);
      else if (this.data.status == 1) {
        this.router.navigate(['/content']);
      }
    }, error => {
      console.error('Error during login:', error);
      // Gérer l'erreur ici, par exemple afficher un message d'erreur à l'utilisateur
    });
  }
  reset() {
    this.User = {
      name: '',
      email: '',
      password: '',
      num_tel: '',
      Adresse: ''
    }
  }
 }

