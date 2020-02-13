import { BrowserModule } from '@angular/platform-browser';
import { NgModule, InjectionToken, inject } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AccordionModule } from 'primeng/accordion';     // accordion and accordion tab
import { MenuItem } from 'primeng/api';                 // api
import { ChartModule } from '../../node_modules/primeng/chart';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule, ActionReducerMap } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { MaterialModule } from './shared/material.module';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { TopnavComponent } from './components/topnav/topnav.component';
import { ClientsComponent } from './components/clients/clients.component';
import { ManageclientDialogComponent } from './components/clients/manageclient-dialog/manageclient-dialog.component';
import { AuditbookComponent } from './components/auditbook/auditbook.component';
import { ChitfundsComponent } from './components/chitfunds/chitfunds.component';
import { InputTextModule } from 'node_modules/primeng/components/inputtext/inputtext';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/parent/child/child.component';
import { SecondComponent } from './components/parent/second/second.component';
import { HttpClientModule } from '@angular/common/http';
import { ClientsModule } from './clients/clients.module';
import { ChitfundModule } from './chitfund/chitfund.module';
import { AuditBookModule } from './audit-book/audit-book.module';

const appRoutes: Routes = [
  { path: '', component: AuditbookComponent },
  { path: 'clients', component: ClientsComponent },
  { path: 'auditbook', component: AuditbookComponent },
  { path: 'chitfunds', component: ChitfundsComponent },
  { path: '**', component: AuditbookComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    TopnavComponent,
    ClientsComponent,
    ManageclientDialogComponent,
    AuditbookComponent,
    ChitfundsComponent,
    ParentComponent,
    ChildComponent,
    SecondComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule.forRoot(appRoutes),
    FlexLayoutModule,
    AccordionModule,
    ChartModule,
    InputTextModule,
    StoreModule.forRoot({ }),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      maxAge: 25 // Retains last 25 states
    }),
    AuditBookModule,
    ChitfundModule,
    ClientsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    ManageclientDialogComponent
  ]
})
export class AppModule { }
