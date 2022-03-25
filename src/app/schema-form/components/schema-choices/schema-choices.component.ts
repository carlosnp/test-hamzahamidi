import { Component } from '@angular/core';

@Component({
  selector: 'app-schema-choices',
  templateUrl: './schema-choices.component.html',
  styleUrls: ['./schema-choices.component.scss']
})
export class SchemaChoicesComponent {
  jsonSchema={
    "type": "object",
    "properties": {
      "surname":     { "type": "string" },
      "firstname":   { "type": "string" },
      "choice": {
        "type": "string",
        "enum": ["one","two", "three"]
      },
    },
    "required": ["surname","firstname", "choice"]
  }
  formSchema = [
    {
      type: "help",
      helpvalue: "<h1>Formulario con Inputs de seleccion</h1>"
    },
    {
      "key": "firstname",
      "type": "text",
      "name": "Nombre",
      "appearance": "standard",
      "htmlClass": "html-class-form",
      "placeholder": "Escribe tu nombre",
    },
    {
      "key": "surname",
      "type": "select",
      "name": "Apellido",
      "placeholder": "Selecciona un apellido",
      "titleMap": [
        { value: "Andersson", name: "Andersson" },
        { value: "Johansson", name: "Johansson" },
        { value: "other", name: "Something else..."}
      ],
      "htmlClass": "html-class-form",
    },
    {
      "key": "choice",
      "type": "radiobuttons",
      "name":"Radio buttons",
      "placeholder": "Selecciona una opcion",
      "style": {
        selected: "primary",
        unselected: "btn-default"
      },
      "titleMap": [
        { value: "one", name: "Uno" },
        { value: "two", name: "Dos" },
        { value: "three", name: "Tres" }
      ],
      "validationMessage": "Don't be greedy!"
    },
    {
      "type": "actions",
      "items": [
        {
          "type": 'submit',
          "title": 'Ok',
          "color":"blue",
        },
        {
          type: 'button',
          title: 'Cancelar',
          style: 'btn-danger',
          onClick: function(event: any) {
            console.log("Evento cancelar",event);
          }
        }
      ]
    }
  ];
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
  cancel() {
    console.log('cancelo el formulario')
  }
}
