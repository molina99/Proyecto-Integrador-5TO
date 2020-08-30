import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {UsersComponent} from './users/users.component';
import {PostulationsComponent} from './postulations/postulations.component';
import {CongressesComponent} from './congresses/congresses.component';
import {LinksComponent} from './links/links.component';

const routes: Routes = [
  {path: 'users', component: UsersComponent},
  {path: 'postulations', component: PostulationsComponent},
  {path: 'congresses', component: CongressesComponent},
  {path: 'links', component: LinksComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {
}
