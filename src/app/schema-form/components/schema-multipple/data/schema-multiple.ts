export const SchemaMultiple = {
  "type": "object",
  "properties": {
    "input": {
      "type": "object",
      "properties": {
        "name":  {
          "title": "Nombre",
          "type": "string",
          "minLength": 3,
          "maxLength": 50
        },
        "switch": {
          "title": "Ojala te lleve er diablo?",
          "type": "boolean"
        },
        "email": {
          "title": "Email",
          "type": "string",
          "pattern": "^\\S+@\\S+$",
          "description": "Email will be used for evil."
        }
      },
      "required": ["name", "email" ],
    },
  },
};
