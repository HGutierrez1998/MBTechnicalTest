import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthenticationModel, Session } from '../../interfaces/authentication/authentication.model';
import { Observable } from 'rxjs';
import { BrandBuildingCreateModel } from '../../interfaces/brand-building/brand-building-create.model';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private url : string = environment.apiUrl;

  constructor(private httpClient : HttpClient) { }

  private getHttpHeaders(): HttpHeaders {
    let token = this.getSession();
    const headers = new HttpHeaders({
      'Content-Type' : 'application/json',
      'Authorization' : `Bearer ${token.token}`
    });
    console.log(token);
    

    return headers;

  }


  authentication(authenticationModel : AuthenticationModel) : Observable<any>  {
    return this.httpClient.post<any>(`${this.url}auth/`, authenticationModel);
  }

  saveSession(session: Session) : void {
    localStorage.setItem("userSession", JSON.stringify(session));

  }

  getSession()  {
    const sessionString : string = localStorage.getItem("userSession")!;
    const userToken = JSON.parse(sessionString!);
    return userToken;
  }

  crearVendedor(brandBuildingCreateModel:BrandBuildingCreateModel) : Observable<any> {
    const headers : HttpHeaders = this.getHttpHeaders();
    
    return this.httpClient.post<any>(`${this.url}crearVendedor/`, brandBuildingCreateModel, {headers:headers});
  }


}
