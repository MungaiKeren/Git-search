import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { User } from '../user/user';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {
  myUser:User [] =[];

  url = 'https://api.github.com/users/';
  token = '?access_token=' + environment.apiUrl;

  constructor(private http: HttpClient) { }

  keren(userName:string){
    interface data {
      login:string;
    }
    let promise =  new Promise ((resolve, reject)=>{
      this.myUser = []
      this.http.get<data>(this.url+userName+this.token).toPromise().then(
        (result)=>{
          this.myUser.push(result);
          resolve();
        },
        (error)=>{
          reject();
        })
    })
    return promise;
  }
}
