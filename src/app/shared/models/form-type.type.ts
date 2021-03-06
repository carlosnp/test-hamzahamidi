/**
 * Tipo de campo de un formulario
 */
export enum FormType {
  /**
   * Se usa para un campo de esquema tipo 'string'
   */
  TEXT = 'text',
  /**
   * Se usa para un campo de esquema tipo 'number' o 'integer'
   */
  NUMBER = 'number',
  /**
   * Se usa para un campo de esquema tipo 'boolean'
   */
  CHECKBOX = 'checkbox',
  /**
   * Se usa para un campo de esquema tipo 'object'
   * fieldset and section doesn't need a key. You can create generic groups with them.
   * They do need a list of items to have as children.
   */
  FIELDSET = 'fieldset',
  /**
   * Se usa para un campo de esquema tipo 'string' y/o 'enum'
   */
  SELECT = 'select',
  /**
   * Se usa para un campo de esquema tipo 'array' y/o 'enum'
   */
  CHECKBOXES = 'checkboxes',
  /**
   * Se usa para un campo de esquema tipo 'array'
   */
  ARRAY = 'array'
};
