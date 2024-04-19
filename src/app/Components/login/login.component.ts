import { Component } from '@angular/core';
import { HttpService } from '../../Services/Http/http.service'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  constructor(private httpServices:HttpService){}

  loginObj={
    email:'',
    password:''
  }

  LoginUser(){
    console.log(this.loginObj);
    this.httpServices.loginUser(this.loginObj).subscribe(resp=>{
       alert('login Success');
       console.log(resp);
      
       localStorage.setItem("token",resp.data.token)
     })
  }

}
