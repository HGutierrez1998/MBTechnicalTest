import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { SubSubCategoriasModel } from '../../interfaces/categorias/sub-categorias.model';
import { HttpResponseModel } from '../../interfaces/http/http-response.model';

@Injectable({
  providedIn: 'root'
})
export class SandboxmbService {

  private url : string = environment.apiUrl;

  constructor(private httpClient : HttpClient) { }

  /**
   * NOTA: Los nombres de los servicios se mantienen en base al origen del API
   */

  getSubCategorias() : Observable<HttpResponseModel> {
    return this.httpClient.get<HttpResponseModel>(`${this.url}getSubsubcategorias/`);
  }

  getOfertas() : Observable<HttpResponseModel>{
    return this.httpClient.get<HttpResponseModel>(`${this.url}getProductosOferta/`);
  }

  getProductosUltimaVisita() : Observable<HttpResponseModel>{
    return this.httpClient.get<HttpResponseModel>(`${this.url}getProductosUltimaVisita/`);
  }

  buscador() {

  }

  /**
   * FILTROS
   */

  getAniosVehiculos() : Observable<HttpResponseModel>{
    return this.httpClient.get<HttpResponseModel>(`${this.url}getAniosVehiculos/`);
  }

  getMarcasVehiculos() : Observable<HttpResponseModel> {
    return this.httpClient.get<HttpResponseModel>(`${this.url}getMarcasVehiculos/`);
  }


}
