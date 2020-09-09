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
import {PostLinkComponent} from './links/post-link/post-link.component';
import {PutLinkComponent} from './links/put-link/put-link.component';
import {PutUserComponent} from './users/put-user/put-user.component';

const routes: Routes = [
  {path: 'users', component: UsersComponent},
  {path: 'put-user/:id', component: PutUserComponent},
  {path: 'speakers', component: SpeakersComponent},
  {path: 'participants', component: ParticipantsComponent},
  {path: 'postulations', component: PostulationsComponent},
  {path: 'post-postulation', component: PostPostulationComponent},
  {path: 'congresses', component: CongressesComponent},
  {path: 'put-congresses', component: PutCongressComponent},
  {path: 'links', component: LinksComponent},
  {path: 'post-link', component: PostLinkComponent},
  {path: 'put-link/:idLink', component: PutLinkComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {
}
