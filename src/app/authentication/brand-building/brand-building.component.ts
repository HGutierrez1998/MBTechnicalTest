import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthenticationService } from '../../services/sandboxmb/authentication.service';
import { Router } from '@angular/router';
import { BrandBuildingCreateModel } from '../../interfaces/brand-building/brand-building-create.model';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { TokenInterceptor } from '../../services/token.interceptor';

@Component({
  selector: 'app-brand-building',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './brand-building.component.html',
  styleUrl: './brand-building.component.scss',
})
export default class BrandBuildingComponent {

  public formbrandBuilding : FormGroup;


  constructor(
    private formBuilder   : FormBuilder,
    private authenticationService : AuthenticationService,
    private router : Router
  ) {
    this.formbrandBuilding = formBuilder.group({
      tradeName     : ['', Validators.required],
      companyPhone  : ['', Validators.required],
      fileInputCSF  : [''],
      fileInputID   : [''],
      street        : ['', Validators.required],
      outerNumber   : ['', Validators.required],
      insideNumber  : ['', Validators.required],
      colony        : ['', Validators.required],
      codePostal    : ['', Validators.required],
    });
  }

  createSeller() : void {

    let brandBuildingCreateModel : BrandBuildingCreateModel = {
      calle : this.formbrandBuilding.value.street,
      numero_exterior : this.formbrandBuilding.value.outerNumber,
      numero_interior : this.formbrandBuilding.value.insideNumber,
      colonia : this.formbrandBuilding.value.colony,
      cp : this.formbrandBuilding.value.codePostal,
      telefono_empresa : this.formbrandBuilding.value.companyPhone,
      nombre_comercial : this.formbrandBuilding.value.tradeName,
      csf : this.formbrandBuilding.value.fileInputCSF,
      identificacion_oficial : this.formbrandBuilding.value.fileInputID,
    }

    console.log(brandBuildingCreateModel);
    

    this.authenticationService
        .crearVendedor(brandBuildingCreateModel)
        .subscribe({
          next: (response => {
            console.log(response);
          }),
          complete: () => {
            console.log('Proceso Completado');        
          },
          error: (error) => {
            console.log(`Ocurrio un error, consulte a sistemas`);
            
          }
        });

  }

  

}
