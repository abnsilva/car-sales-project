import { Injectable } from '@angular/core';
import { ResponseLogin } from 'src/app/resources/models/ResponseLogin';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public loginResponse!: ResponseLogin;

 public clear (): void{
  Boolean(this.loginResponse.jwt.length !== 0)
 }
  
 public isAuthenticated (): boolean{
  return Boolean(this.loginResponse?.jwt);
 }

}
