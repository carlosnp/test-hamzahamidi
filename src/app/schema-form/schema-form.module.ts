import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SchemaFormRoutingModule } from './schema-form-routing.module';
/** Componentes */
import { BaseSchemaComponent } from './base-schema/base-schema.component';
import { BasicDataOnlyModeComponent } from './components/basic-data-only-mode/basic-data-only-mode.component';
import { BasicSchemaComponent } from './components/basic-schema/basic-schema.component';
/** Librerias */
import { MaterialDesignFrameworkModule } from '@ajsf/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';
import {MatFormFieldModule} from '@angular/material/form-field';
import { BasicSchemaDataComponent } from './components/basic-schema-data/basic-schema-data.component';
import { SchemaChoicesComponent } from './components/schema-choices/schema-choices.component';

@NgModule({
  declarations: [
    BasicDataOnlyModeComponent,
    BasicSchemaComponent,
    BaseSchemaComponent,
    BasicSchemaDataComponent,
    SchemaChoicesComponent
  ],
  imports: [
    CommonModule,
    SchemaFormRoutingModule,
    MaterialDesignFrameworkModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatTabsModule,
    MatFormFieldModule
  ],
  exports:[
    BaseSchemaComponent
  ]
})
export class SchemaFormModule { }
