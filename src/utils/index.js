import i18next from 'i18next';

export const getRouteTitle = titleKey => () =>
  `${i18next.t(titleKey)} - ${process.env.APP_NAME}`;
