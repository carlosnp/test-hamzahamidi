/** Generales */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
/** Librerias */
import { MaterialDesignFrameworkModule } from '@ajsf/material';
import { FlexLayoutModule } from '@angular/flex-layout';
/** Rutas */
import { AppRoutingModule } from './app-routing.module';
/** Componentes */
import { AppComponent } from './app.component';
/** Modulos */
import { SharedModule } from './shared/shared.module';
import { SchemaFormModule } from './schema-form/schema-form.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    MaterialDesignFrameworkModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    SchemaFormModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
