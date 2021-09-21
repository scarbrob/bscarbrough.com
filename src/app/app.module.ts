import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './parts/about/about.component';
import { ExperienceComponent } from './parts/experience/experience.component';
import { ProjectsComponent } from './parts/projects/projects.component';
import { IntroComponent } from './parts/intro/intro.component';
import { NgbCarouselModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavBarComponent } from './parts/nav-bar/nav-bar.component';
import { MDBBootstrapModule} from 'angular-bootstrap-md';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {MatTabsModule} from '@angular/material/tabs';
import { NgxParallaxScrollModule } from 'ngx-parallax-scroll';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { DomSanitizer } from "@angular/platform-browser";
import {MatRippleModule} from '@angular/material/core';



@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ExperienceComponent,
    ProjectsComponent,
    IntroComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgbCarouselModule,
    MDBBootstrapModule.forRoot(),
    BrowserAnimationsModule,
    MatTabsModule,
    NgxParallaxScrollModule,
    MatProgressBarModule,
    MatRippleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
