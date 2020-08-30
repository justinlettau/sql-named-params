import { ConvertResult, NamedParams } from './interfaces';

/**
 * Matches a named parameter.
 *
 * Format: `:myParam`
 */
const NAMED_PARAM = /:([\w]+)/g;

/**
 * Placeholder character.
 */
const PLACEHOLDER = '?';

/**
 * Convert a string with named params, to a string with placeholders and an array of values.
 *
 * @param query SQL query string.
 * @param params Named params.
 */
export function convert(query: string, params: NamedParams): ConvertResult {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const values: any[] = [];
  let result: RegExpExecArray | null;

  while ((result = NAMED_PARAM.exec(query)) !== null) {
    query = query.replace(result[0], PLACEHOLDER);
    values.push(params[result[1]]);
  }

  return {
    query,
    values,
  };
}
