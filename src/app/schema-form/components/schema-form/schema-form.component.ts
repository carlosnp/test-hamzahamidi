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
   * Valores iniciales del formulario
   */
  @Input()
  initValues: {[index: string]: any} = {};
  /**
   * Errores del formulario
   */
  @Input()
  errors: FormErrors[] = [];
  /**
   * Constructor del componente
   */
  constructor() { }
}
