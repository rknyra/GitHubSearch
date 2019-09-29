import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { Http } from '@angular/http';


@Injectable({
  providedIn: 'root'
})

export class GhSearchService {

  myBio: any;

  private username: string;
  private repositories: string;

  constructor(private http:Http) { 
    
  }
  getMyGithubData(username){
    console.log(username)
    let promise = new Promise((resolve, reject) => {
      this.http.get(environment.apiUrl + 'users/' + username + '?access_token=' + environment.accessToken).toPromise().then(response => {
        this.myBio = response.json()
        resolve(this.myBio)
      },
        error => {
          console.log(error)
           reject(error)
        })
    })
    return promise
  }
  }
