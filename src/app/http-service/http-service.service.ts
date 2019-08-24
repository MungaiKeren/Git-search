import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { User } from '../user/user';
import { Repo } from '../repo/repo';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  myUser:User [] =[];
  myRepos:Repo [] = [];

  url = 'https://api.github.com/users/';  
  token = '?access_token='+environment.apiUrl;


  constructor(private http: HttpClient) { }

  keren(userName:string){
    interface data {
      name:string;
      avatar_url:string;
      followers_url:string;
      following_url:string;
      bio:string;
      login:string;
    }

    let promise =  new Promise ((resolve, reject)=>{
      this.myUser = [];
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
  kerenRepo(userName:string){
    interface repoData {
      name: string;
      html_url: string;
      description:string;
    }
    let promise = new Promise ((resolve,reject)=>{
      this.myRepos = [];
      this.http.get<repoData>(this.url+userName+"/repos?"+this.token).toPromise().then(
        (result)=>{
          this.myRepos.push(result);
          resolve();
        },
        (error)=>{
          reject();
        })
    })
    return promise;
  }
}
