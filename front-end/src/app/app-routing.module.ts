import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {RegisterSpeakerComponent} from './register-speaker/register-speaker.component';
import {PageNotFoundComponent} from './home/page-not-found/page-not-found.component';
import {RegisterReviewerComponent} from './register-reviewer/register-reviewer.component';
import {LoginGuard} from './guards/login.guard';
import {RegisterAssistantComponent} from './register-assistant/register-assistant.component';
import { PrincipalprojectComponent } from "./principalproject/principalproject.component";

const routes: Routes = [
  {path: '', redirectTo: '/principal', pathMatch: 'full'},
  {path: 'principal', component: PrincipalprojectComponent},
  {path: 'home', component: HomeComponent},
  {path: 'register-assistant', component: RegisterAssistantComponent},
  {path: 'register-speaker', component: RegisterSpeakerComponent},
  {path: 'register-reviewer', component: RegisterReviewerComponent},
  {path: 'login', component: LoginComponent},
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule),
    canActivate: [LoginGuard]
  },
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
