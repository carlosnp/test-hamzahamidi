export const SchemaMultiple = {
  "type": "object",
  "properties": {
      "input": {
          "type": "object",
          "properties": {
              "switch": {
                  "title": "Spam me, please",
                  "type": "boolean"
                },
                "email": {
                  "title": "Email",
                  "type": "string",
                  "pattern": "^\\S+@\\S+$",
                  "description": "Email will be used for evil."
                }
          },
          "required": [
            "switch"
          ]
      }
  }
};
