import { defineI18n } from 'fumadocs-core/i18n';

export const i18n = defineI18n({
  defaultLanguage: 'zh-CN',
  languages: ['zh-CN', 'en'],
  hideLocale: 'default-locale',
  fallbackLanguage: 'zh-CN',
});

export function localizedPath(locale: string, href: string): string {
  const clean = href.startsWith('/') ? href : `/${href}`;

  if (locale === i18n.defaultLanguage) {
    return clean;
  }

  return `/${locale}${clean}`;
}
