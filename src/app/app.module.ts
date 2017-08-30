import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { RoutingModule } from './routing.module';
import { HomeComponent } from './home/home.component';
import { PhotosComponent } from './photos/photos.component';
import { WorksComponent } from './works/works.component';
import { MakeUpComponent } from './make-up/make-up.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    PhotosComponent,
    WorksComponent,
    MakeUpComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    RouterModule
  ],
  providers: [RouterModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
