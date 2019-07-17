import {NgModule} from '@angular/core';
import {MatButtonModule, MatCheckboxModule, MatIconModule, MatToolbarModule, MatListModule, MatSidenavModule, MatCardModule, MatTabsModule, MatExpansionModule} from '@angular/material';

@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatIconModule, MatToolbarModule, MatListModule, MatSidenavModule, MatCardModule, MatTabsModule, MatExpansionModule],
  exports: [MatButtonModule, MatCheckboxModule, MatIconModule, MatToolbarModule, MatListModule, MatSidenavModule, MatCardModule, MatTabsModule, MatExpansionModule],
})
export class MaterialModule { }