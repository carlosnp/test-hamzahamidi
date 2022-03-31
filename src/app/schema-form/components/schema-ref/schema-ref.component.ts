import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormErrors } from 'src/app/shared/models';
import { FormRef, FormRefData, SchemaRef } from './data';

@Component({
  selector: 'app-schema-ref',
  templateUrl: './schema-ref.component.html',
  styleUrls: ['./schema-ref.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SchemaRefComponent {
  /**
   * Lista local de los errores del formulario
   */
  errors: FormErrors[] = [];
  /**
   * Json Esquema
   */
  jsonSchema = SchemaRef;
  /**
   * Formulario
   */
  formSchema = FormRef;
  /**
   * Valores del formulario
   */
  data = FormRefData;
  /**
   * Valores del formulario
   */
  newFormValues: any;
  /**
   * Constructor del documento
   */
  constructor() {}
  /**
   * Registro de eventos
   * @param event Formulario
   */
  eventRegister(event: any){
  console.log('Data del formulario', event);
    this.newFormValues = event;
  }
  /**
   * Obtiene los errores en la validacion de un formulario
   * @param event
   */
  validationErrors(event: FormErrors[]){
    console.log('Errores del formulario', event);
    this.errors = event;
  }
}
