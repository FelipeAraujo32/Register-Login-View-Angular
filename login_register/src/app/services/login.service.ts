import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpCliente: HttpClient) { }

  login(login: string, password: string){
    return this.httpCliente.post("http://localhost:8080/login",{login, password}, { responseType: 'text' }).pipe(
     tap((token: string) => {
        sessionStorage.setItem("token", token)})
    );
  }
}
