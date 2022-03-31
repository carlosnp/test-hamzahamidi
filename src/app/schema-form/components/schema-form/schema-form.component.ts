import { Component, EventEmitter, Input, Output } from '@angular/core';
/**
 * Modelos
 */
import {
  FormErrors
} from 'src/app/shared/models';


@Component({
  selector: 'app-schema-form',
  templateUrl: './schema-form.component.html',
  styleUrls: ['./schema-form.component.scss']
})
export class SchemaFormComponent {
  isFormValid = false;
  /**
   * Class of form
   */
  @Input()
  classForm: 'small' | 'big' = 'small';
  /**
   * Valores del formulario
   */
  @Input()
  dataForm: {[index: string]: any} = {};
  /**
   * Errores del formulario
   */
  @Input()
  errors: FormErrors[] = [];
  /**
   * Constructor del componente
   */
  constructor() { }
  /**
   * Valida si el objeto con los datos del formulario esta vacio
   * @param data
   * @returns
   */
  isEmptyData(data: {[index: string]: any} = {}) {
    return Object.keys(data).length > 0;
  }
}
