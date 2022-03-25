import { Component } from '@angular/core';
import { FormErrors } from 'src/app/shared/models';

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
  jsonSchema={
    "type": "object",
    "title": "test_form",
    "properties": {
      "name":  {
        "type": "string",
        "minLength": 3,
        "maxLength": 50
      },
      "email":  {
        "type": "string",
        "pattern": "^\\S+@\\S+$",
        "description": "Email will be used for evil.",
      },
      "comment": {
        "type": "string",
        "minLength": 10,
        "maxLength": 200
      },
    },
    "required": ["name","email","comment"]
  }
  formSchema = [
    {
      type: "help",
      helpvalue: "<h1>Formulario de Inputs tipo text y textarea</h1>"
    },
    {
      "key": "name",
      "type": "text",
      "name": "Nombre",
      "appearance": "standard",
      "htmlClass": "html-class-form",
      "fieldHtmlClass": "field-html-class-form",
      "labelHtmlClass": "label-html-class-form",
      "placeholder": "Escribe tu nombre",
      "validationMessage": {
        "required": "El campo Nombre es requerido.",
        "minLength": "El campo Nombre debe tener minimo de 3 caracteres",
        "maxLength": "El campo Nombre debe tener maximo de 50 caracteres"
      }
    },
    {
      "key": "email",
      "type": "email",
      "name": "Correo Electronico",
      "appearance": "fill",
      "htmlClass": "html-class-form",
      "validationMessage": {
        "required": "El campo Correo electronico es requerido.",
        "pattern": "Escribe un correo valido"
      }
    },
    {
      "key": "comment",
      "type": "textarea",
      "name": "Comentario",
      "placeholder": "Make a comment",
      "appearance": "outline",
      "htmlClass": "html-class-form",
      "validationMessage": {
        "required": "El campo comentario es requerido.",
        "minLength": "El campo Comentario debe tener minimo de 10 caracteres",
        "maxLength": "El campo Comentario debe tener maximo de 200 caracteres"
      }
    },
    {
      "type": "submit",
      "title": "Enviar informacion",
      "color":"blue"
    }
  ];
  data = {
    "name": "Hassie Connelly",
    "email": "your.email+fakedata68037@gmail.com",
    "comment": "865 Goodwin Stream"
  }
  newFormValues: any;
  constructor() { }
  /**
   * Registro de eventos
   * @param event Formulario
   */
  eventRegister(event: any){
    console.log('Evento', event);
    this.newFormValues = event;
  }
  /**
   * Registro de cambios en el formulario
   * @param event Formulario
   */
  changeForm(event: any){
    console.log('Change form', event)
  }
  /**
   * Obtiene los errores en la validacion de un formulario
   * @param event
   */
  validationErrors(event: FormErrors[]){
    this.errors = event;
  }
}
