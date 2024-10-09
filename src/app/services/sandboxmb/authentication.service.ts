import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { AuthenticationModel } from '../../interfaces/authentication/authentication.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private url : string = environment.apiUrl;

  constructor(private httpClient : HttpClient) { }


  authentication(authenticationModel : AuthenticationModel) : Observable<any>  {
    return this.httpClient.get<any>(`${this.url}auth/`);
  }

  crearVendedor() : Observable<any> {
    return this.httpClient.get<any>(`${this.url}authenticationModel/`);
  }


}
