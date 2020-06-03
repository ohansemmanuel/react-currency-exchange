export const removeLeadingZero = (str: string) =>
  /^0\d{1}/.test(str) ? str.substr(1) : str;
