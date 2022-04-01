import { FormDestroyStrategy } from "./form-destroy-strategy.type";
import { FormType } from "./form-type.type";

/**
 * Opciones del formulario de un campo de un esquema
 */
export interface FormSchema {
  /**
   * The dot notatin to the attribute on the model
   * Ej. "address.street"
   */
  key: string;
  /**
   * Type of field
   */
  type: FormType;
  /**
   * Title of field, taken from schema if available
   */
  title?: string;
  /**
   * Set to true to hide title
   */
  notitle?: boolean;
  /**
   * A description, taken from schema if available, can be HTML
   */
  description?: string;
  /**
   * A custom validation error message
   */
  validationMessage?: string | {[index: string]: string};
  /**
   * Inline feedback icons
   */
  feedback?: boolean;
  /**
   * Set true to NOT apply 'has-success' class to a field that was validated successfully
   */
  disableSuccessState?: boolean;
  /**
   * Set true to NOT apply 'has-error' class to a field that failed validation
   */
  disableErrorState?: boolean;
  /**
   * placeholder on inputs and textarea
   */
  placeholder?: string;
  /**
   * Same effect as readOnly in schema. Put on a fieldset or array and their items will inherit it.
   */
  readonly?: boolean;
  /**
   * CSS Class(es) to be added to the container div
   */
  htmlClass?: string;
  /**
   * CSS Class(es) to be added to field input (or similar)
   */
  fieldHtmlClass?: string;
  /**
   * CSS Class(es) to be added to the label of the field (or similar)
   */
  labelHtmlClass?: string;
  /**
   * Copy values to these schema keys.
   * Ej. ["address.street"]
   */
  copyValueTo?: string[];
  /**
   * Show or hide field depending on an angular expression
   */
  condition?: string;
  /**
   * Changes model on $destroy event. default is "remove".
   */
  destroyStrategy?: FormDestroyStrategy;
}
