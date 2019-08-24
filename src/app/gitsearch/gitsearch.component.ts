import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from '../http-service/http-service.service';
import { User } from '../user/user';
import { Repo } from '../repo/repo';

@Component({
  selector: 'app-gitsearch',
  templateUrl: './gitsearch.component.html',
  styleUrls: ['./gitsearch.component.css']
})
export class GitsearchComponent implements OnInit {

    user:User[];
    repo: Repo [];
 
  constructor(private kay:HttpServiceService) { }

  ngOnInit() {
    this.name('MungaiKeren');
  }
 name(userName){
    this.kay.keren(userName).then(
      (success)=>{
        this.user=this.kay.myUser;
        console.log(this.user)
      },
      (error)=>{
        console.log(error)
      });


      this.kay.kerenRepo(userName).then(
        (success)=>{
          this.repo =this.kay.myRepos;  
          console.log(this.repo);
        },
        (error)=>{
          console.log(error)
        })
  }
  // repository(userName){
  //   this.kay.kerenRepo(userName).then(
  //     (success)=>{
  //       this.repo = this.kay.myRepos;
  //       console.log(this.repo)
  //     },
  //     (error)=>{
  //       console.log(error)
  //     })
  // }
}
