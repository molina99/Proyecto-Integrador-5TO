import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UsersComponent} from './users/users.component';
import {SidebarComponent} from './sidebar/sidebar.component';

import {DashboardRoutingModule} from './dashboard-routing.module';
import { PostulationsComponent } from './postulations/postulations.component';
import {FormsModule} from "@angular/forms";
import { CongressesComponent } from './congresses/congresses.component';
import { LinksComponent } from './links/links.component';
import { AssistantComponent } from '../dashboard/assistant/assistant.component';
import { SpeakerComponent } from '../dashboard/speaker/speaker.component';

@NgModule({
  declarations: [
    UsersComponent,
    SidebarComponent,
    PostulationsComponent,
    CongressesComponent,
    LinksComponent,
    AssistantComponent,
    SpeakerComponent
  ],
    imports: [
        CommonModule,
        DashboardRoutingModule,
        FormsModule
    ]
})
export class DashboardModule {
}
