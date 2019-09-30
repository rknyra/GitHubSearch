import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './home/about/about.component';
import { SearchUsersComponent } from './home/search-users/search-users.component';
import { SearchReposComponent } from './home/search-repos/search-repos.component';
import { NotFoundComponent } from './not-found/not-found.component';



const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent},
  { path: 'search-users', component: SearchUsersComponent},
  { path:'search-repos', component: SearchReposComponent },
  { path: '', redirectTo: "/home", pathMatch: "full" },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
