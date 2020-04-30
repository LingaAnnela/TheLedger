import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ChitfundsComponent } from './components/chitfunds.component';
import { Routes, RouterModule } from '@angular/router';
import { MaterialModule } from '../shared/material.module';

const ROUTES: Routes = [{ path: '', component: ChitfundsComponent }];
@NgModule({
    imports: [
      CommonModule,
      MaterialModule,
      StoreModule.forFeature('chitfund', {}),
      EffectsModule.forFeature([]),
      RouterModule.forChild(ROUTES)
    ],
    declarations: [ChitfundsComponent]
  })

export class ChitfundModule { }