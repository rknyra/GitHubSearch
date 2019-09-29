import { Component, OnInit } from '@angular/core';
import { GhSearchService } from '../gh-search-service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  rkGhProfile: any;
  rkGhRepos: any;
  totalRepos: number;
  username = 'RkNyra';
  

  constructor(
    private ghService: GhSearchService
  )  {
    this.getMyProfile();
    this.getMyRepos();
  }

  ngOnInit() {
  }

  getMyProfile(){
    
      this.ghService.getGithubUser(this.username).then((response)=>{
        console.log('RK Profile.----------------', response)
        this.rkGhProfile = response;
      })
    }

  getMyRepos() {
    
      this.ghService.getGithubRepos(this.username).then((response) => {
        console.log('RK Repo.----------------', response)
        this.rkGhRepos = response;
      })
    }

}
