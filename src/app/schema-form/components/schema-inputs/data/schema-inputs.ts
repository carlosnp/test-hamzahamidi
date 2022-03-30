export const SchemaInputs = {
  "type": "object",
  "title": "test_form",
  "properties": {
    "name":  {
      "type": "string",
      "minLength": 3,
      "maxLength": 50
    },
    "email":  {
      "type": "string",
      "pattern": "^\\S+@\\S+$",
      "description": "Email will be used for evil.",
    },
    "comment": {
      "type": "string",
      "minLength": 10,
      "maxLength": 200
    },
  },
  "required": ["name","email","comment"]
}
