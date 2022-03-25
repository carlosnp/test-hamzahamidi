import { Component, EventEmitter, Input, Output } from '@angular/core';

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
   * Constructor del componente
   */
  constructor() { }
}
