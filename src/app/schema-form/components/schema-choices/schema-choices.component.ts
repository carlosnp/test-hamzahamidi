import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormChoices, SchemaChoices } from './data';

@Component({
  selector: 'app-schema-choices',
  templateUrl: './schema-choices.component.html',
  styleUrls: ['./schema-choices.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SchemaChoicesComponent {
  /**
   * Json Esquema
   */
  jsonSchema = SchemaChoices;
  /**
   * Formulario
   */
  formSchema = FormChoices;
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
  cancel() {
    console.log('cancelo el formulario')
  }
}
