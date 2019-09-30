import { Component, OnInit } from '@angular/core';
import { GhSearchService } from 'src/app/gh-search-service';

@Component({
  selector: 'app-search-repos',
  templateUrl: './search-repos.component.html',
  styleUrls: ['./search-repos.component.css']
})
export class SearchReposComponent implements OnInit {
  repoName: "";
  user: any;
  repos: any;

  constructor(
    private gitHubService: GhSearchService
  ) {
  }

  ngOnInit() {
  }


  searchRepo(repo) {
    console.log('repos search----', repo)
    this.getUserDetails(repo)

  }


  getUserDetails(repo) {
    this.gitHubService.getGithubUser(repo).then((response) => {
      console.log('00000', response)
      this.user = response
    })
    this.gitHubService.getGithubRepos(repo).then((response) => {
      console.log('-------===00', response)
      this.repos = response
    })

  }

}
