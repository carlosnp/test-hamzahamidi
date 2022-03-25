import { Component } from '@angular/core';

@Component({
  selector: 'app-schema-inputs-data',
  templateUrl: './schema-inputs-data.component.html',
  styleUrls: ['./schema-inputs-data.component.scss']
})
export class SchemaInputsDataComponent {
  jsonSchema={
    "type": "object",
    "title": "test_form",
    "properties": {
      "name":  {
        "title": "Nombre",
        "type": "string",
        "minLength": 3,
        "maxLength": 50
      },
      "email":  {
        "title": "Email",
        "type": "string",
        "pattern": "^\\S+@\\S+$",
        "description": "Email will be used for evil."
      },
      "comment": {
        "title": "Comentario",
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
      helpvalue: `
        <h1>Formulario de Inputs tipo text y textarea</h1>
        <h3> <i>El formulario tiene data de entrada</i> </h3>
      `
    },
    {
      "key": "name",
      "type": "text",
      "appearance": "standard",
      "htmlClass": "html-class-form",
      "placeholder": "Escribe tu nombre"
    },
    {
      "key": "email",
      "type": "email",
      "appearance": "fill",
      "description": "Email will be used for evil.",
      "htmlClass": "html-class-form",
    },
    {
      "key": "comment",
      "type": "textarea",
      "placeholder": "Make a comment",
      "appearance": "outline",
      "htmlClass": "html-class-form",
    },
    {
      "type": "submit",
      "title": "Enviar informacion",
      // "color":"accent",
      // "color":"warn",
      // "color":"primary"
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
    this.newFormValues = event;
  }
  /**
   * Registro de cambios en el formulario
   * @param event Formulario
   */
  changeForm(event: any){
    console.log('Change form', event)
  }
}
