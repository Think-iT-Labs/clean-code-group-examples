/**
 * This takes a string that has a pattern.
 *
 * The pattern string may contain  placeholders in  the form {%vkey_in_values_object%}.
 *
 * This fuction takes this produces a text that replaces all the fieldsToParse with the values object.
 *
 *
 * For example
 * const values  = {
 *  name: 'Adaobi',
 * age: 20,
 * }
 * const pattern = '{%name%} is {%age%} years old';
 * console.log(parseTextPattern(pattern, values, ['name', 'age'])) // give Adaobi is 20 years old
 *

 * @param patternText This is the pattern text. Special values to be replaced in
 * this string should be written in the form {%filedName%}.
 *
 * @param values This is an object that contains the user inputs.
 * @param fieldsToParse The fields to be replaced.
 * 
 *@example



 */
export const parseTextPattern = (
  patternText: string,
  values: Record<string, string>,
  fieldsToParse: string[] = []
): string => {
  if (!fieldsToParse.length) return patternText;
  let finalLabel = patternText;
  fieldsToParse = Array.from(new Set(fieldsToParse));
  for (const field of fieldsToParse) {
    const regex = new RegExp(`{%${field}%}`, "g");
    finalLabel = finalLabel.replace(regex, values[field]);
  }

  return finalLabel;
};
