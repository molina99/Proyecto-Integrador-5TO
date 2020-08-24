import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UsersComponent} from './users/users.component';
import {SidebarComponent} from './sidebar/sidebar.component';

import {DashboardRoutingModule} from './dashboard-routing.module';

@NgModule({
  declarations: [
    UsersComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule {
}
