/**
 * Enum del evento destroy
 */
export enum FormDestroyStrategy {
  /**
   * means empty strings, "",
   * for model values that has the string type, {} for model values with object type and [] for array type.
   * All other types will be treated as "remove".
   */
  EMPTY = 'empty',
  /**
   * deletes the property. This is the default.
   */
  REMOVE = 'remove',
  /**
   * keeps the value of the property event though the field is no longer in the form or being vaidated before submit.
   */
  RETAIN = 'retain'
}
