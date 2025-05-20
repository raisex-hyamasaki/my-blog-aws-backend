import type { StrapiApp } from '@strapi/strapi/admin';

export default {
  config: {
    locales: [
      // 'ar',
      // 'fr',
      // 'cs',
      // 'de',
      // 'dk',
      // 'es',
      // 'he',
      // 'id',
      // 'it',
      'ja',
      // 'ko',
      // 'ms',
      // 'nl',
      // 'no',
      // 'pl',
      // 'pt-BR',
      // 'pt',
      // 'ru',
      // 'sk',
      // 'sv',
      // 'th',
      // 'tr',
      // 'uk',
      // 'vi',
      // 'zh-Hans',
      // 'zh',
    ],
  },
  translations: {
      ja: {
        'strapi-plugin-ja-pack': {
          id: "ID",
          title: "タイトル",
          description: "説明",
          createdAt: "作成日時",
          content: "本文"
        }
      }
    },
  bootstrap(app: StrapiApp) {
    console.log(app);
  },
};
