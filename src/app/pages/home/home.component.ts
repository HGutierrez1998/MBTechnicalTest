import { SubSubCategoriasModel } from '../../interfaces/categorias/sub-categorias.model';
import { SandboxmbService } from './../../services/sandboxmb/sandboxmb.service';
import { Component, OnInit } from '@angular/core';
import { HttpResponseModel } from '../../interfaces/http/http-response.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export default class HomeComponent implements OnInit {

  public subSubCategoriasModel : SubSubCategoriasModel[] = []; 

  constructor(
    private sandboxmbService : SandboxmbService 
  ) {}


  ngOnInit(): void {
    this.getSubSubCategorias();
  }

  getSubSubCategorias() : void {
    this.sandboxmbService.getSubCategorias().subscribe((response : HttpResponseModel) => {
      this.subSubCategoriasModel = response.content;
    });
  }

}
