import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root' 
})
export class TokenInterceptor implements HttpInterceptor {

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const sessionString : string = localStorage.getItem("userSession")!;
    const userToken = JSON.parse(sessionString!);

    // Si hay un token, clonar la solicitud y agregar el token en los headers
    if (userToken) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${userToken.token}`
        }
      });
    }

    return next.handle(request);
  }
}
