export const SchemaRef = {
  "type": "object",
  "properties": {
    "input": {
      "type": "object",
      "title": "Campos basicos",
      "properties": {
        "name": {
          "$ref": "#/definitions/NOMBRE"
        },
        "email": {
          "$ref": "#/definitions/CORREO"
        }
      },
      "required": [ "name" ]
    }
  },
  "definitions": {
    "NOMBRE": {
      "title": "Nombre",
      "type": "string",
      "minLength": 3,
      "maxLength": 50,
      "placeholder": "Escribe tu nombre",
    },
    "CORREO": {
      "title": "Email",
      "type": "string",
      "pattern": "^\\S+@\\S+$",
      "placeholder": "Escribe el correo electronico",
      "description": "Email will be used for evil.",
    }
  }
}
