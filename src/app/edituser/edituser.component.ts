import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})
export class EdituserComponent implements OnInit{

  formdata:any;
  companies:any;
  id:any;

  constructor(private api:ApiService,private route:ActivatedRoute,private router:Router) {

    this.id = this.route.snapshot.paramMap.get("id");



  }

  ngOnInit(): void {
    this.formdata = new FormGroup({
      name:new FormControl("",Validators.compose([Validators.required])),
      age:new FormControl("",Validators.compose([Validators.required])),
      education:new FormControl("",Validators.compose([Validators.required])),
      email:new FormControl("",Validators.compose([Validators.required])),
      number:new FormControl("",Validators.compose([Validators.required])),
    })

    if(this.id != null){
      this.api.get("usersCrud/" + this.id).subscribe((result:any)=>{
        console.log(result);

        this.formdata.patchValue({
          name:result.name,
          age:result.age,
          education:result.education,
          email:result.email,
          number:result.number
        })
      })
    }

  }


  submit(data:any){
    if(this.id == null){
      this.api.post("usersCrud",data).subscribe((result:any)=>{
        this.router.navigate(['/']);
        this.ngOnInit();
      })
    }
    else{
      this.api.put("usersCrud/" + this.id,data).subscribe((result:any)=>{
        this.router.navigate(['/']);
      })
    }
  }

}
