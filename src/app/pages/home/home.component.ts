import { SubSubCategoriasModel } from '../../interfaces/categorias/sub-categorias.model';
import { SandboxmbService } from './../../services/sandboxmb/sandboxmb.service';
import { Component, OnInit } from '@angular/core';
import { HttpResponseModel } from '../../interfaces/http/http-response.model';
import { ProductOfferModel } from '../../interfaces/offers/products-offers.model';
import { ProductLastVisited } from '../../interfaces/products/product-last-visited.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export default class HomeComponent implements OnInit {

  public subSubCategoriasModel  : SubSubCategoriasModel[] = []; 
  public productOfferModel      : ProductOfferModel[] = []; 
  public productLastVisited     : ProductLastVisited[] = []; 

  constructor(
    private sandboxmbService : SandboxmbService 
  ) {}


  ngOnInit(): void {
    this.getSubSubCategorias();
    this.getOfertas();
  }

  getSubSubCategorias() : void {
    this.sandboxmbService.getSubCategorias().subscribe((response : HttpResponseModel) => {
      this.subSubCategoriasModel = response.content.slice(0, 5);
    });
  }

  getOfertas() : void {
    this.sandboxmbService.getOfertas().subscribe((response : HttpResponseModel) => {
      this.productOfferModel = response.content.slice(0, 5);
      console.log(this.productOfferModel);
      
    });
  }

  getProductosUltimaVisita() : void {
    this.sandboxmbService.getProductosUltimaVisita().subscribe((response : HttpResponseModel) => {
      this.productLastVisited = response.content.slice(0, 5);
    });
  }



}
