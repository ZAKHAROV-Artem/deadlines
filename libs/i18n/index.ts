import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import * as Localization from "expo-localization";
import translationEn from "@/assets/locales/en_US/translation.json";
import translationUa from "@/assets/locales/uk_UA/translation.json";
import translationFr from "@/assets/locales/fr_FR/translation.json";
import translationDe from "@/assets/locales/de_DE/translation.json";
import translationPl from "@/assets/locales/pl_PL/translation.json";
import translationJp from "@/assets/locales/ja_JP/translation.json";
import translationCn from "@/assets/locales/zh_CN/translation.json";
import translationCz from "@/assets/locales/cs_CZ/translation.json";
import translationSk from "@/assets/locales/sk_SK/translation.json";
import translationIt from "@/assets/locales/it_IT/translation.json";
import translationEs from "@/assets/locales/es_ES/translation.json";

import MMKVStorage from "../mmkv-storage";

const resources = {
  cs_CZ: { translation: translationCz },
  de_DE: { translation: translationDe },
  en_US: { translation: translationEn },
  es_ES: { translation: translationEs },
  fr_FR: { translation: translationFr },
  it_IT: { translation: translationIt },
  ja_JP: { translation: translationJp },
  pl_PL: { translation: translationPl },
  sk_SK: { translation: translationSk },
  uk_UA: { translation: translationUa },
  zh_CN: { translation: translationCn },
};

const initI18n = async () => {
  let savedLanguage = await MMKVStorage.getItem("language");

  if (!savedLanguage) {
    const locales = Localization.getLocales();
    savedLanguage = locales.length > 0 ? locales[0].languageTag : "en_US";
  }

  i18n.use(initReactI18next).init({
    compatibilityJSON: "v3",
    fallbackLng: "en_US",
    interpolation: {
      escapeValue: false,
    },
    lng: savedLanguage,
    resources,
  });
};

initI18n();

export default i18n;
