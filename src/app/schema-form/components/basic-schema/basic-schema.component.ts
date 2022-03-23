import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic-schema',
  templateUrl: './basic-schema.component.html',
  styleUrls: ['./basic-schema.component.scss']
})
export class BasicSchemaComponent implements OnInit {
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
      "key": "name",
      "type": "text",
      "appearance": "standard",
      // "htmlClass": "primary",
      // "fieldHtmlClass": "primary",
      // "labelHtmlClass": "primary",
      "placeholder": "Escribe tu nombre"
    },
    {
      "key": "email",
      "type": "email",
      "appearance": "fill"
    },
    {
      "key": "comment",
      "type": "textarea",
      "placeholder": "Make a comment",
      "appearance": "outline",
    },
    {
      "type": "submit",
      "title": "Enviar informacion",
      // "color":"accent",
      // "color":"warn",
      // "color":"primary"
      "color":"blue"
    }
  ]
  newFormValues: any;
  constructor() { }

  ngOnInit(): void {
  }
  isValidForm(event: any){
    console.log('Es valido el formulario?', event)
  }
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
}
