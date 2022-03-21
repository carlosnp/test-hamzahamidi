import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SchemaFormRoutingModule } from './schema-form-routing.module';
import { BasicDataOnlyModeComponent } from './components/basic-data-only-mode/basic-data-only-mode.component';
/** Librerias */
import { MaterialDesignFrameworkModule } from '@ajsf/material';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    BasicDataOnlyModeComponent
  ],
  imports: [
    CommonModule,
    SchemaFormRoutingModule,
    MaterialDesignFrameworkModule,
    FlexLayoutModule,
    BrowserAnimationsModule
  ],
  exports:[
    BasicDataOnlyModeComponent
  ]
})
export class SchemaFormModule { }
