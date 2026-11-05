import { en } from "./locales/en";
import { de } from "./locales/de";
import { fr } from "./locales/fr";
import { ro } from "./locales/ro";
import { useSettings } from "../hooks/useSettings";

const dictionaries = { en, de, fr, ro };
type Language = keyof typeof dictionaries;

export function useTranslation() {
  const { language } = useSettings();

  const currentLang = dictionaries[language as Language] ? language : "en";
  const t = dictionaries[currentLang as Language];

  return { t, currLang: currentLang };
}
