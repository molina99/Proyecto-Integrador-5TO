import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './home/header/header.component';
import { FooterComponent } from './home/footer/footer.component';
import { RegisterComponent } from './register/register.component';
import { PageNotFoundComponent } from './home/page-not-found/page-not-found.component';
import { MenuComponent } from './menu/menu.component';
import { OrganizerComponent } from './organizer/organizer.component';
import { LinkComponent } from './link/link.component';
import { PostCongresComponent } from './organizer/post-congres/post-congres.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    RegisterComponent,
    PageNotFoundComponent,
    MenuComponent,
    OrganizerComponent,
    LinkComponent,
    PostCongresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
