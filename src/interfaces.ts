/**
 * Named params.
 */
export interface NamedParams {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [index: string]: any;
}

/**
 * Convert method result.
 */
export interface ConvertResult {
  query: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  values: any[];
}
