import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { FormErrors } from 'src/app/shared/models';
import { FormMultiple, FormMultipleData, SchemaMultiple } from './data';


@Component({
  selector: 'app-schema-multipple',
  templateUrl: './schema-multipple.component.html',
  styleUrls: ['./schema-multipple.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SchemaMultippleComponent {
  /**
   * Lista local de los errores del formulario
   */
   errors: FormErrors[] = [];
   /**
    * Json Esquema
    */
   jsonSchema = SchemaMultiple;
   /**
    * Formulario
    */
   formSchema = FormMultiple;
   /**
    * Valores del formulario
    */
   data = FormMultipleData;
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
