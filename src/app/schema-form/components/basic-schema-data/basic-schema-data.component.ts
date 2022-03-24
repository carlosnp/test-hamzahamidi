import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic-schema-data',
  templateUrl: './basic-schema-data.component.html',
  styleUrls: ['./basic-schema-data.component.scss']
})
export class BasicSchemaDataComponent implements OnInit {
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
