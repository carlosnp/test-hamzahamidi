import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { RootBarComponent } from './root-bar/root-bar.component';
import { RootFooterComponent } from './root-footer/root-footer.component';


@NgModule({
  declarations: [
    RootBarComponent,
    RootFooterComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports:[
    RootBarComponent,
    RootFooterComponent
  ]
})
export class SharedModule { }
