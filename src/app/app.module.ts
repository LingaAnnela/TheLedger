import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';


import { AppComponent } from './app.component';
import { MaterialModule } from './shared/material.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { TopnavComponent } from './components/topnav/topnav.component';
import { ClientsComponent } from './components/clients/clients.component';

const appRoutes: Routes = [
  { path: '', component: ClientsComponent},
  { path: '**', component: DashboardComponent},
  { path: '**', component: DashboardComponent }

] ;

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SidenavComponent,
    TopnavComponent,
    ClientsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule.forRoot(appRoutes),
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
