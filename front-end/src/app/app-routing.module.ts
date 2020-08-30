import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { PageNotFoundComponent } from './home/page-not-found/page-not-found.component';
import { MenuComponent } from './menu/menu.component';
import { OrganizerComponent } from './organizer/organizer.component';
import { LinkComponent } from './link/link.component';
import { PostCongresComponent } from './organizer/post-congres/post-congres.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'organizer', component: OrganizerComponent },
  { path: 'links', component: LinkComponent },
  { path: 'post', component: PostCongresComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
