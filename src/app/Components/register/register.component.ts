import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../Services/Http/http.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent implements OnInit{

  ngOnInit(): void {
    debugger
  }

  constructor(private services:HttpService){}
  regObj = {
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  };

  confirmPassword = '';
  isFormSubmitted = false;
  registrationError = '';

  registerFunction() {
    this.isFormSubmitted = true;
    console.log(this.regObj);
    console.log(this.confirmPassword);
    
    
    if (this.confirmPassword === this.regObj.password) {
      this.services.registerUser(this.regObj).subscribe(
        (res) => {
          
          if (res.success) {
            alert('Registration successful');
            console.log(res);
          } else {
            alert('Registration failed');
          }
        },
        (error) => {
          this.registrationError = error.message || 'Registration failed';
          console.log( error);
        }
      );
    } else {
      this.registrationError = 'Passwords do not match';
    }
  }

}
