import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {UsersComponent} from './users/users.component';
import {PostulationsComponent} from './postulations/postulations.component';
import {CongressesComponent} from './congresses/congresses.component';
import {LinksComponent} from './links/links.component';
import { AssistantComponent } from '../dashboard/assistant/assistant.component';
import { SpeakerComponent } from '../dashboard/speaker/speaker.component';


const routes: Routes = [
  {path: 'users', component: UsersComponent},
  {path: 'postulations', component: PostulationsComponent},
  {path: 'congresses', component: CongressesComponent},
  {path: 'links', component: LinksComponent},
  { path: 'assistant', component: AssistantComponent },
  { path: 'speaker', component: SpeakerComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {
}
