import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {UsersComponent} from './users/users.component';
import {PostulationsComponent} from './postulations/postulations.component';
import {CongressesComponent} from './congresses/congresses.component';
import {LinksComponent} from './links/links.component';
import {PutCongressComponent} from './congresses/put-congress/put-congress.component';

const routes: Routes = [
  {path: 'users', component: UsersComponent},
  {path: 'postulations', component: PostulationsComponent},
  {path: 'congresses', component: CongressesComponent},
  {path: 'put-congresses', component: PutCongressComponent},
  {path: 'links', component: LinksComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {
}
