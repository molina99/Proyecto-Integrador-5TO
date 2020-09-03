import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UsersComponent} from './users/users.component';
import {SidebarComponent} from './sidebar/sidebar.component';

import {DashboardRoutingModule} from './dashboard-routing.module';
import {PostulationsComponent} from './postulations/postulations.component';
import {FormsModule} from "@angular/forms";
import {CongressesComponent} from './congresses/congresses.component';
import {LinksComponent} from './links/links.component';
import {PutCongressComponent} from './congresses/put-congress/put-congress.component';
import {PostPostulationComponent} from './postulations/post-postulation/post-postulation.component';

@NgModule({
  declarations: [
    UsersComponent,
    SidebarComponent,
    PostulationsComponent,
    CongressesComponent,
    LinksComponent,
    PutCongressComponent,
    PostPostulationComponent
  ],
  exports: [
    SidebarComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule
  ]
})
export class DashboardModule {
}
