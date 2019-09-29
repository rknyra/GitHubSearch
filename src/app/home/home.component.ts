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
  username: 'RkNyra';
  

  constructor(
    private ghService: GhSearchService
  )  {
    this.getMyProfile();
  }

  ngOnInit() {
  }

  getMyProfile(){
    try {
      this.ghService.getMyGithubData(this.username).then((res)=>{
        console.log('RK Profile.----------------', res)
        // this.rkGhProfile = JSON.parse(res.body)

      }
       
      )
     

    }catch(error){
      
    }
  

  }

}
