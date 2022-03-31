export const FormRef = [
  {
    "key": "input.name",
    "type": "text",
    "appearance": "standard",
    "htmlClass": "html-class-form",
    "fieldHtmlClass": "field-html-class-form",
    "labelHtmlClass": "label-html-class-form",
    "validationMessage": {
      "required": "El campo Nombre es requerido.",
      "minLength": "El campo Nombre debe tener minimo de 3 caracteres",
      "maxLength": "El campo Nombre debe tener maximo de 50 caracteres"
    }
  },
  {
    "key": "input.email",
    "type": "email",
    "name": "Correo Electronico del destinatario",
    "appearance": "fill",
    "htmlClass": "html-class-form",
    "validationMessage": {
      "required": "El campo Correo electronico es requerido.",
      "pattern": "Escribe un correo valido"
    },
  },
];
