export const FormInputsData = [
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
]
