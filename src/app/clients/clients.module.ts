import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ClientsComponent } from './components/clients.component';
import { Routes, RouterModule } from '@angular/router';
import { ManageclientDialogComponent } from './components/manageclient-dialog/manageclient-dialog.component';
import { MaterialModule } from '../shared/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClientsEffects } from './state/clients.effects';
import * as fromReducer from './state/clients.reducer';
import { ClientsService } from './services/client.service';
import { TRANSLOCO_SCOPE, TranslocoModule } from '@ngneat/transloco';

const ROUTES: Routes = [{ path: '', component: ClientsComponent }];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    StoreModule.forFeature(fromReducer.clientsFeatureKey, fromReducer.reducer),
    EffectsModule.forFeature([ClientsEffects]),
    RouterModule.forChild(ROUTES),
    TranslocoModule
  ],
  declarations: [ClientsComponent, ManageclientDialogComponent],
  providers: [
    ClientsService,
    { provide: TRANSLOCO_SCOPE, useValue: 'clients' }
  ],
  entryComponents: [ManageclientDialogComponent]
})
export class ClientsModule {}
