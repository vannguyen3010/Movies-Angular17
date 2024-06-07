declare var google: any;
import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { response } from 'express';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  private router = inject(Router);
  ngOnInit(): void {
    google.accounts.id.initialize({
    client_id: '65883882924-hoi2u6d99ftmnd29k4f2p4cg7hjttt2d.apps.googleusercontent.com',
    callback: (resp: any)=> this.handleLogin(resp)
   });
   google.accounts.id.renderButton(document.getElementById("google-btn"),{
    theme: 'filled_blue',
    size: 'large',
    shape: 'rectangle',
    width: 300
   });
  }

  private decodeToken(token:string){
    return JSON.parse(atob(token.split(".")[1]));
  }
  handleLogin(response: any){
    if(response){
      //decode the token
      const payload = this.decodeToken(response.credential);
      //store in session
      sessionStorage.setItem("loggedInUser", JSON.stringify(payload));
      //navigate to home/browse
      this.router.navigate(['browse'])
    }
  }
}
