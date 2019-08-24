import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from '../http-service/http-service.service';
import { User } from '../user/user';

@Component({
  selector: 'app-gitsearch',
  templateUrl: './gitsearch.component.html',
  styleUrls: ['./gitsearch.component.css']
})
export class GitsearchComponent implements OnInit {

    user:User[];
 
  constructor(private kay:HttpServiceService) { }

  ngOnInit() {
    this.kay.keren('MungaiKeren');
  }
 name(userName){
    this.kay.keren(userName).then(
      (success)=>{
        this.user=this.kay.myUser;
        console.log(this.user)
      },
      (error)=>{
        console.log(error)
      }
    )
  }
}
