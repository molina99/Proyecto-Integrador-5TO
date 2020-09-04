import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {UsersComponent} from './users/users.component';
import {PostulationsComponent} from './postulations/postulations.component';
import {CongressesComponent} from './congresses/congresses.component';
import {LinksComponent} from './links/links.component';
import {PutCongressComponent} from './congresses/put-congress/put-congress.component';
import {PostPostulationComponent} from './postulations/post-postulation/post-postulation.component';
import {SpeakersComponent} from './users/speakers/speakers.component';
import {ParticipantsComponent} from './users/participants/participants.component';

const routes: Routes = [
  {path: 'users', component: UsersComponent},
  {path: 'speakers', component: SpeakersComponent},
  {path: 'participants', component: ParticipantsComponent},
  {path: 'postulations', component: PostulationsComponent},
  {path: 'post-postulation', component: PostPostulationComponent},
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
