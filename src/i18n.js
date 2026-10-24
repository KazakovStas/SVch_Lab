import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  ru: {
    translation: {
      "app_name": "ЛИЦА",
      "nav_catalog": "Каталог",
      "nav_projects": "Биржа проектов",
      "nav_add": "Попасть в базу",
      "search_placeholder": "Поиск по навыкам...",
      "lang_ru": "RU",
      "lang_en": "EN",
      "menu_login": "Войти",
      "menu_profile": "Мой профиль",
      "menu_logout": "Выйти"
    }
  },
  en: {
    translation: {
      "app_name": "FACES",
      "nav_catalog": "Catalog",
      "nav_projects": "Project Exchange",
      "nav_add": "Join the Base",
      "search_placeholder": "Search by skills...",
      "lang_ru": "RU",
      "lang_en": "EN",
      "menu_login": "Login",
      "menu_profile": "My Profile",
      "menu_logout": "Logout"
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "ru",
    fallbackLng: "ru",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;