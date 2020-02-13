import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

@NgModule({
    imports: [
      CommonModule,
      StoreModule.forFeature('AuditBook', {}),
      EffectsModule.forFeature([])
    ],
    declarations: []
  })

export class AuditBookModule { }