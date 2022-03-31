import { Component, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { FormErrors } from 'src/app/shared/models';
import { FormInputsData, FormValuesData, SchemaInputsData } from './data';

@Component({
  selector: 'app-schema-inputs-data',
  templateUrl: './schema-inputs-data.component.html',
  styleUrls: ['./schema-inputs-data.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SchemaInputsDataComponent {
  /**
   * Lista local de los errores del formulario
   */
  errors: FormErrors[] = [];
  /**
   * Json Esquema
   */
  jsonSchema = SchemaInputsData;
  /**
   * Formulario
   */
  formSchema = FormInputsData;
  /**
   * Valores del formulario
   */
  data = FormValuesData;
  /**
   * Valores del formulario
   */
  newFormValues: any;
  /**
   * Constructor del documento
   */
  constructor(
    private changeDetectorRef: ChangeDetectorRef,
  ) {}
  /**
   * Registro de eventos
   * @param event Formulario
   */
  eventRegister(event: any){
    this.newFormValues = event;
  }
  /**
   * Obtiene los errores en la validacion de un formulario
   * @param event
   */
  validationErrors(event: FormErrors[]){
    this.errors = event;
  }
}
