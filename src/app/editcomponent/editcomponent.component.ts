import { importType } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-editcomponent',
  templateUrl: './editcomponent.component.html',
  styleUrls: ['./editcomponent.component.css']
})
export class EditcomponentComponent implements OnInit {
id:any;
fullname:any;
post:any;
  constructor(private http:HttpClient,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['i']
    console.log(this.id );
    this.http.get<any>(`http://localhost:3000/posts`).subscribe((res)=>{
      this.post=res.posts
      console.log(this.post);
      
    })
    
  }

}
