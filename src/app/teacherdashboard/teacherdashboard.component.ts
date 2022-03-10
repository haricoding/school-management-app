import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup,FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-teacherdashboard',
  templateUrl: './teacherdashboard.component.html',
  styleUrls: ['./teacherdashboard.component.css']
})
export class TeacherdashboardComponent implements OnInit {
  show: boolean = false
data:any;
emplist: Array<any> =[];
showtable(){
  this.show=!this.show
}
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.http.get<any>('http://localhost:3000/posts').subscribe((res)=>{
      res.find((a: any) => {
          if(a.role == 'student'){
            console.log('res',res);
             this.emplist.push(a);
             console.log('array',this.emplist);
          }
          this.data= this.emplist;
      });
        
    })
  }

  submittable=new FormGroup({
    size1:new FormControl("",[Validators.required]),
    size2:new FormControl("",[Validators.required]),
    size3:new FormControl("",[Validators.required]),
    size4:new FormControl("",[Validators.required]),
    size5:new FormControl("",[Validators.required]),
    size6:new FormControl("",[Validators.required]),
    size7:new FormControl("",[Validators.required]),
    size8:new FormControl("",[Validators.required]),
    size9:new FormControl("",[Validators.required]),
    size10:new FormControl("",[Validators.required]),
    size11:new FormControl("",[Validators.required]),
    size12:new FormControl("",[Validators.required]),
    size13:new  FormControl("",[Validators.required]),
    size14:new  FormControl("",[Validators.required]),
    size15:new  FormControl("",[Validators.required]),
    size16:new  FormControl("",[Validators.required]),
    size17:new  FormControl("",[Validators.required]),
    size18:new  FormControl("",[Validators.required]),
    size19:new  FormControl("",[Validators.required]),
    size20:new  FormControl("",[Validators.required]) 
  })
  submit(){
    console.log( this.submittable.value);
    this.http.post<any>('http://localhost:3000/comments',this.submittable.value)
    .subscribe(res=>{
      console.log(res);
      
    })
    }
}
