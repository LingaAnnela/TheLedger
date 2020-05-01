import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { Routes, RouterModule } from '@angular/router';
import { MaterialModule } from '../shared/material.module';
import { ChitfundListComponent } from './components/chitfund-list/chitfund-list.component';
import { ChitfundDetailsComponent } from './components/chitfund-details/chitfund-details.component';
import { ChitfundService } from './services/chitfund.service';
import { TRANSLOCO_SCOPE } from '@ngneat/transloco';
import * as fromReducer from './state/chitfund.reducer';
import { ChitfundEffects } from './state/chitfund.effects';

const ROUTES: Routes = [
  { path: '', component: ChitfundListComponent },
  { path: '/:id', component: ChitfundDetailsComponent }
];
@NgModule({
    imports: [
      CommonModule,
      MaterialModule,
      StoreModule.forFeature(fromReducer.chitfundFeatureKey, fromReducer.reducer),
      EffectsModule.forFeature([ChitfundEffects]),
      RouterModule.forChild(ROUTES)
    ],
    declarations: [ChitfundListComponent, ChitfundDetailsComponent],
    providers: [
      ChitfundService,
      { provide: TRANSLOCO_SCOPE, useValue: 'chitfunds' }
    ],
  })

export class ChitfundModule { }