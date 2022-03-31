import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SchemaFormRoutingModule } from './schema-form-routing.module';
import {
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';
/** Componentes */
import { BaseSchemaComponent } from './base-schema/base-schema.component';
import { BasicDataOnlyModeComponent } from './components/basic-data-only-mode/basic-data-only-mode.component';
import { SchemaChoicesComponent } from './components/schema-choices/schema-choices.component';
import { SchemaInputsComponent } from './components/schema-inputs/schema-inputs.component';
import { SchemaInputsDataComponent } from './components/schema-inputs-data/schema-inputs-data.component';
import { SchemaFormComponent } from './components/schema-form/schema-form.component';
/** Librerias */
import { MaterialDesignFrameworkModule } from '@ajsf/material';
import { Bootstrap4FrameworkModule } from '@ajsf/bootstrap4';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import { SchemaMultippleComponent } from './components/schema-multipple/schema-multipple.component';
import { SchemaRefComponent } from './components/schema-ref/schema-ref.component';

@NgModule({
  declarations: [
    BasicDataOnlyModeComponent,
    BaseSchemaComponent,
    SchemaChoicesComponent,
    SchemaInputsComponent,
    SchemaInputsDataComponent,
    SchemaFormComponent,
    SchemaMultippleComponent,
    SchemaRefComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SchemaFormRoutingModule,
    MaterialDesignFrameworkModule,
    Bootstrap4FrameworkModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatTabsModule,
    MatFormFieldModule,
    MatCardModule,
    MatGridListModule
  ],
  exports:[
    BaseSchemaComponent
  ]
})
export class SchemaFormModule { }
