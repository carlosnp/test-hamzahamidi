import { Component } from '@angular/core';
import { FormErrors } from 'src/app/shared/models';
import { FormInputs, FormValues, SchemaInputs } from './data';


@Component({
  selector: 'app-schema-inputs',
  templateUrl: './schema-inputs.component.html',
  styleUrls: ['./schema-inputs.component.scss']
})
export class SchemaInputsComponent {
  /**
   * Lista local de los errores del formulario
   */
  errors: FormErrors[] = [];
  /**
   * Json Esquema
   */
  jsonSchema = SchemaInputs;
  /**
   * Formulario
   */
  formSchema = FormInputs;
  /**
   * Valores del formulario
   */
  data = FormValues;
  /**
   * Valores del formulario
   */
  newFormValues: any;
  /**
   * Constructor del documento
   */
  constructor() { }
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
