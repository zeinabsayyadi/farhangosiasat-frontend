// type Language = {
//   dropdownValue: string
//   countryName: string
// }
export const RTL = "rtl";
export const LTR = "ltr";

export const defaultLanguage = "en";
export const supportedLanguagesMap = {
  fa: { dropdownValue: "فارسی", countryName: "Iran" },
  en: { dropdownValue: "English", countryName: "England" },
};
export const supportedLanguages = Object.keys(supportedLanguagesMap);

export function humanReadableLanguage(key = defaultLanguage) {
  return supportedLanguagesMap[key].dropdownValue;
}

export function getCountryName(key = defaultLanguage) {
  return supportedLanguagesMap[key]?.countryName;
}
