import { NgModule } from '@angular/core';
import { MatButtonModule,
  MatCheckboxModule,
  MatIconModule,
  MatToolbarModule,
  MatListModule,
  MatSidenavModule,
  MatCardModule,
  MatTabsModule,
  MatExpansionModule, 
  MatDialogModule,
  MatFormFieldModule,
  MatInputModule } from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    MatToolbarModule,
    MatListModule,
    MatSidenavModule,
    MatCardModule,
    MatTabsModule,
    MatExpansionModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule
  ],
  exports: [
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    MatToolbarModule,
    MatListModule,
    MatSidenavModule,
    MatCardModule,
    MatTabsModule,
    MatExpansionModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule
  ],
})
export class MaterialModule { }
