import { Component, OnInit } from '@angular/core';
import { GhSearchService } from 'src/app/gh-search-service';


@Component({
  selector: 'app-search-users',
  templateUrl: './search-users.component.html',
  styleUrls: ['./search-users.component.css']
})
export class SearchUsersComponent implements OnInit {

  username: "";
  user: any;
  repos: any;

  constructor(
    private gitHubService: GhSearchService
  ) { 
  }

  ngOnInit() {
  }


  searchUser(user){
    console.log('user search----', user)
    this.getUserDetails(user)

  }


  getUserDetails(user){
    this.gitHubService.getGithubUser(user).then((response)=>{
      this.user = response
    })
    this.gitHubService.getGithubRepos(user).then((response) => {
      console.log('-------===00', response)
      this.repos = response
    })

  }

}
