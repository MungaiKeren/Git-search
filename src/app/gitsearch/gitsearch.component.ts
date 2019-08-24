import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from '../http-service/http-service.service';

@Component({
  selector: 'app-gitsearch',
  templateUrl: './gitsearch.component.html',
  styleUrls: ['./gitsearch.component.css']
})
export class GitsearchComponent implements OnInit {

 
  constructor(kay:HttpServiceService) { }

  ngOnInit() {
  }
 name(userName){
    console.log(userName)
  }
}
