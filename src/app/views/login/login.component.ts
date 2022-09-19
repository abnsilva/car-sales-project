import { Component, OnInit } from '@angular/core';
import { RequestLogin } from 'src/app/resources/models/RequestLogin';
import { LoginService } from 'src/app/resources/services/login.service';
import { AlertService } from 'src/app/resources/services/alert.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public requestLogin!: RequestLogin;
  public login!: RequestLogin['login'];
  public password! :RequestLogin['password']


  constructor(private loginService: LoginService, 
              private alertService: AlertService,
              private router: Router) { }

  ngOnInit(): void {
    this.requestLogin = new RequestLogin();
  }

  public doLogin():void{
   this.loginService.doLogin(this.requestLogin).subscribe((data) => {
    this.router.navigate(['dashboard'])
   },
   (httpError)=>{
    this.alertService.error (httpError.error.message);
    this.requestLogin['login'] = ''
    this.requestLogin['password'] = ''
   })

  }

}
