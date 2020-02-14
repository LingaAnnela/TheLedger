import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ChitfundsComponent } from './components/chitfunds.component';
import { Routes, RouterModule } from '@angular/router';

const ROUTES: Routes = [{ path: '', component: ChitfundsComponent }];
@NgModule({
    imports: [
      CommonModule,
      StoreModule.forFeature('chitfund', {}),
      EffectsModule.forFeature([]),
      RouterModule.forChild(ROUTES)
    ],
    declarations: [ChitfundsComponent]
  })

export class ChitfundModule { }