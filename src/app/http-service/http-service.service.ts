import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  url = 'https://api.github.com/users/';
  token = '?access_token=' + environment.apiUrl;

  constructor(private http: HttpClient) { }



  keren(userName:string){
    let promise =  new Promise ((resolve, reject)=>{
      this.http.get(this.url+userName+this.token).toPromise().then(
        (result)=>{
          console.log(result)
          resolve();
        },
        (error)=>{
          reject();
        })
    })
    return promise;
  }
}
