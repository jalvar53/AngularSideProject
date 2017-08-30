import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PhotosComponent } from './photos/photos.component';
import { MakeUpComponent } from './make-up/make-up.component';
import { WorksComponent } from './works/works.component';

const routes = [
  { path: 'home', component: HomeComponent },
  { path: 'photos', component: PhotosComponent },
  { path: 'make-up', component: MakeUpComponent },
  { path: 'works', component: WorksComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    RoutingModule,
    RouterModule
  ],
  declarations: [],
  exports: [RouterModule]
})
export class RoutingModule {}
