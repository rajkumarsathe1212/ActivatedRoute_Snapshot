import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit{

  result:any;

  constructor(private api:ApiService) { }

  ngOnInit(): void {
    this.load();
  }

  load(){
    this.api.get("usersCrud").subscribe((result:any)=>{
      console.log(result);
      this.result = result;
    })
  }

  delete(id:any){
    this.api.delete("usersCrud/" + id).subscribe((result:any)=>{
      console.log("deleted");

    })
  }

}
