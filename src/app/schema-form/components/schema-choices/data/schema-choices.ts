export const SchemaChoices = {
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
};
