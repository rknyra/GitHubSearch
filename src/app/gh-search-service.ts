import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';


@Injectable({
  providedIn: 'root'
})

export class GhSearchService {

  private username: string;
  private repositories: string;

  constructor(private http:HttpClient) { 
    this.username = 'RkNyra';
    // this.repositories = '';
  }
}
