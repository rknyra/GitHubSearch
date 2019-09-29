import { Component, OnInit } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  rkGhProfile: any;
  rkGhRepos: any;
  

  // constructor(private http: HttpClient) {
  //   http.get('https://api.github.com/users/RkNyra')
  //   .subscribe(response =>{
  //     this.rkGhProfile = response.json();
  //   });
  //  }

  ngOnInit() {
  }

}
