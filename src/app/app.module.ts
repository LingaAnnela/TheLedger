import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AccordionModule } from 'primeng/accordion';     //accordion and accordion tab
import { MenuItem } from 'primeng/api';                 //api
import { ChartModule } from '../../node_modules/primeng/chart';


import { AppComponent } from './app.component';
import { MaterialModule } from './shared/material.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { TopnavComponent } from './components/topnav/topnav.component';
import { ClientsComponent } from './components/clients/clients.component';
import { ManageclientDialogComponent } from './components/clients/manageclient-dialog/manageclient-dialog.component';
import { AuditbookComponent } from './components/auditbook/auditbook.component';
import { ChitfundsComponent } from './components/chitfunds/chitfunds.component';
import { InputTextModule } from 'node_modules/primeng/components/inputtext/inputtext';
import { AgeComponent } from './components/dashboard/age/age.component';
import { RadiusComponent } from './components/dashboard/radius/radius.component';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/parent/child/child.component';
import { SecondComponent } from './components/parent/second/second.component';


const appRoutes: Routes = [
  { path: '', component: ParentComponent },
  { path: 'clients', component: ClientsComponent },
  { path: 'auditbook', component: AuditbookComponent },
  { path: 'chitfunds', component: ChitfundsComponent },
  { path: '**', component: DashboardComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SidenavComponent,
    TopnavComponent,
    ClientsComponent,
    ManageclientDialogComponent,
    AuditbookComponent,
    ChitfundsComponent,
    AgeComponent,
    RadiusComponent,
    ParentComponent,
    ChildComponent,
    SecondComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule.forRoot(appRoutes),
    FlexLayoutModule,
    AccordionModule,
    ChartModule,
    InputTextModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    ManageclientDialogComponent
  ]
})
export class AppModule { }
