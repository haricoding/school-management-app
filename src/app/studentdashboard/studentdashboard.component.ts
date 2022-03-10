import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup,FormControl,Validators } from '@angular/forms';


@Component({
  selector: 'app-studentdashboard',
  templateUrl: './studentdashboard.component.html',
  styleUrls: ['./studentdashboard.component.css']
})
export class StudentdashboardComponent implements OnInit {
   tables:any;
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.http.get<any>("http://localhost:3000/comments").subscribe(res=>{
      this.tables=res
      console.log(this.tables);   
    })
  }
  
}
