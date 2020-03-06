import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AccordionModule } from 'primeng/accordion'; // accordion and accordion tab
import { ChartModule } from '../../node_modules/primeng/chart';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { MaterialModule } from './shared/material.module';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { TopnavComponent } from './components/topnav/topnav.component';
import { InputTextModule } from 'node_modules/primeng/components/inputtext/inputtext';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/parent/child/child.component';
import { SecondComponent } from './components/parent/second/second.component';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TranslocoRootModule } from './transloco-root.module';

const ROUTES: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'clients', loadChildren: './clients/clients.module#ClientsModule' },
  {
    path: 'auditbook',
    loadChildren: './auditbook/auditbook.module#AuditBookModule'
  },
  {
    path: 'chitfunds',
    loadChildren: './chitfund/chitfund.module#ChitfundModule'
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    TopnavComponent,
    ParentComponent,
    ChildComponent,
    SecondComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    AccordionModule,
    ChartModule,
    InputTextModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      maxAge: 25 // Retains last 25 states
    }),
    RouterModule.forRoot(ROUTES),
    TranslocoRootModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: []
})
export class AppModule {}
