import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormControl, FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private http: HttpClient, private route: Router) { }

  loginForm = new FormGroup({
    // email: new FormControl("", [Validators.required]),
    // password: new FormControl("", [Validators.required])
    email: new FormControl("", [Validators.required]),
    password: new FormControl("", [Validators.required]),
    
  })
  get email() {
    return this.loginForm.get("email")
  }
  get password() {
    return this.loginForm.get("password")
  }



  ngOnInit(): void {
  }

  login() {
    console.log(this.loginForm.value);
    this.http.get<any>('http://localhost:3000/posts')
      .subscribe(res => {
        const data = res.find((a: any) => {
           if( a.email === this.loginForm.value.email && a.password === this.loginForm.value.password){
              return res;
           }
        });
        if (data && data.role == 'student') {
            console.log('student',data);
            // return true
            this.route.navigate(['student'])
          } else {
            console.log('teacher',data);
              
            this.route.navigate(['teacher']);

        }
      }) 
      }

}
