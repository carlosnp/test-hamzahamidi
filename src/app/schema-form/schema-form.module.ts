import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SchemaFormRoutingModule } from './schema-form-routing.module';
/** Componentes */
import { BasicDataOnlyModeComponent } from './components/basic-data-only-mode/basic-data-only-mode.component';
import { BasicSchemaComponent } from './components/basic-schema/basic-schema.component';
/** Librerias */
import { MaterialDesignFrameworkModule } from '@ajsf/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    BasicDataOnlyModeComponent,
    BasicSchemaComponent
  ],
  imports: [
    CommonModule,
    SchemaFormRoutingModule,
    MaterialDesignFrameworkModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule
  ],
  exports:[
    BasicDataOnlyModeComponent,
    BasicSchemaComponent
  ]
})
export class SchemaFormModule { }
