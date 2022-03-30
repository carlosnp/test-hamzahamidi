export const SchemaInputsData = {
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
