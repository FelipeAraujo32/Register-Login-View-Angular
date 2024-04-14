import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private httpCliente: HttpClient) { }

  signup(name: string, lastname: string, numberPhone: string, login: string, password: string){
    return this.httpCliente.post("http://localhost:8080/register",{name, lastname, numberPhone, login, password})
  }
}
