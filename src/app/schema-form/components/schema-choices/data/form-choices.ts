export const FormChoices = [
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
