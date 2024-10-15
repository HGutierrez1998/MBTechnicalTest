import { AuthenticationService } from './../../services/sandboxmb/authentication.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthenticationModel } from '../../interfaces/authentication/authentication.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export default class LoginComponent  {

  public formLogin : FormGroup;


  constructor(
    private formBuilder   : FormBuilder,
    private authenticationService : AuthenticationService,
    private router : Router
  ) {
    this.formLogin = formBuilder.group({
      userName : ['', Validators.required],
      password : ['', Validators.required]
    });
  }



  getAuthentication() : void {
    const request : AuthenticationModel =  {
      username: this.formLogin.value.userName,
      password : this.formLogin.value.password
    };

    // this.router.navigate(['layout']);

    console.log(request);
    

    this.authenticationService
        .authentication(request)
        .subscribe({
          next: (response => {
            console.log(response);
            
            this.authenticationService.saveSession(response);
            this.router.navigate(['layout']);
          }),
          complete: () => {
            console.log('Proceso Completado');        
          },
          error: (error) => {
            console.log(`Ocurrio un error, consulte a sistemas`);
            
          }
        });
  }

  register() : void {
    this.router.navigate(['brand-building']);
  }


}
