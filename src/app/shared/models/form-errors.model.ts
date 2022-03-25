/**
 * Interface para los errores de un formulario
 */
export interface FormErrors {
  dataPath: string;
  keyword: string;
  message: string;
  params: {[index: string]: any}
  schemaPath: string;
}
