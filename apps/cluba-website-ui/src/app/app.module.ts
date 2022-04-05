import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { WelcomeComponent } from './welcome/welcome.component';
import { HeroComponent } from './welcome/hero.component';
import { RouterModule, Routes } from '@angular/router';
import { RepeaterListComponent } from './shared/repeater-list.component';
import { NetListComponent } from './shared/net-list.component';
import { ArrlLearnComponent } from './shared/arrl-learn.component';
import { NotYetComponent } from './not-yet.component';

const routes: Routes = [
  {path: 'welcome', component: WelcomeComponent},
  {path: 'notyet', component: NotYetComponent},
  {path: '', redirectTo: "/welcome", pathMatch: 'full'}
];

@NgModule({
  declarations: [AppComponent, WelcomeComponent, HeroComponent, RepeaterListComponent, NetListComponent, ArrlLearnComponent, NotYetComponent],
  imports: [BrowserModule, BrowserAnimationsModule, LayoutModule, HttpClientModule,
     RouterModule.forRoot(routes)
    ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
