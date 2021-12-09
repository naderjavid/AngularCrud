import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsListComponent } from './components/posts/posts-list/posts-list.component';
import { UsersListComponent } from './components/users/users-list/users-list.component';

const routes: Routes = [
  { path: 'posts', component: PostsListComponent},
  { path: 'users', component: UsersListComponent},
  { path: '', pathMatch: 'full', redirectTo: 'posts'},
  { path: '**', redirectTo: 'posts'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
