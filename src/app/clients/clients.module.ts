import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ClientsComponent } from './components/clients.component';
import { Routes, RouterModule } from '@angular/router';
import { ManageclientDialogComponent } from './components/manageclient-dialog/manageclient-dialog.component';
import { MaterialModule } from '../shared/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import * as fromReducer from './state/clients.reducer';

const ROUTES: Routes = [{ path: '', component: ClientsComponent }];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    StoreModule.forFeature(fromReducer.clientsFeatureKey, fromReducer.reducer),
    EffectsModule.forFeature([]),
    RouterModule.forChild(ROUTES)
  ],
  declarations: [ClientsComponent, ManageclientDialogComponent],
  entryComponents: [ManageclientDialogComponent]
})
export class ClientsModule {}
