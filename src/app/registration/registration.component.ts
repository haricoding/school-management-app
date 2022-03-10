import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private http:HttpClient, private route:Router) { }

  ngOnInit(): void {
  }
 

  regisForm = new FormGroup({
    fullname: new FormControl("", [Validators.required]),
    mobilenumber: new FormControl("", [Validators.required]),
    email: new FormControl("", [Validators.required]),
    password: new FormControl("", [Validators.required]),
    role: new FormControl("", [Validators.required]),

  })
  get fullname() {
    return this.regisForm.get("username")
  }
  get mobilenumber() {
    return this.regisForm.get("mobilenumber")
  }
  get email() {
    return this.regisForm.get("regemail")
  }
  get password() {
    return this.regisForm.get("regpassword")
  }
  get role() {
    return this.regisForm.get("stud")
  }

  signup(){
    console.log(this.regisForm.value);

  this.http.post<any>('http://localhost:3000/posts',this.regisForm.value)
  .subscribe(res=>{
    console.log(res);

      alert("signupsucessfull")
      // this.signupform.reset();
      this.route.navigate(['login']);
    })
  }
  }


