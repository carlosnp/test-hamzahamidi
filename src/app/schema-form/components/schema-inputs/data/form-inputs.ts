export const FormInputs = [
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
