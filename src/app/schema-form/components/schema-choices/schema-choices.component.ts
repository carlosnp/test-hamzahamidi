import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-schema-choices',
  templateUrl: './schema-choices.component.html',
  styleUrls: ['./schema-choices.component.scss']
})
export class SchemaChoicesComponent implements OnInit {
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
      helpvalue: "<h1>Yo Ninja!</h1>"
    },
    {
      "key": "firstname",
      "type": "text",
      "appearance": "standard",
      "htmlClass": "html-class-form",
      "placeholder": "Escribe tu nombre",
    },
    {
      key: "surname",
      type: "select",
      titleMap: [
        { value: "Andersson", name: "Andersson" },
        { value: "Johansson", name: "Johansson" },
        { value: "other", name: "Something else..."}
      ],
      "htmlClass": "html-class-form",
    },
    {
      key: "choice",
      type: "radiobuttons",
      style: {
        selected: "primary",
        unselected: "btn-default"
      },
      titleMap: [
        { value: "one", name: "Uno" },
        { value: "two", name: "Dos" },
        { value: "three", name: "Tres" }
      ]
    },
    {
      type: "actions",
      items: [
        {
          type: 'submit',
          title: 'Ok',
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
  cancel() {
    console.log('cancelo el formulario')
  }
}
