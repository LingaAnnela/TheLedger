import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { AuditbookComponent } from './components/auditbook.component';
import { Routes, RouterModule } from '@angular/router';
import { ChartModule } from 'primeng/chart';
import { MaterialModule } from '../shared/material.module';

const ROUTES: Routes = [{ path: '', component: AuditbookComponent }];

@NgModule({
    imports: [
      CommonModule,
      ChartModule,
      MaterialModule,
      StoreModule.forFeature('auditbook', {}),
      EffectsModule.forFeature([]),
      RouterModule.forChild(ROUTES)
    ],
    declarations: [AuditbookComponent]
  })

export class AuditBookModule { }