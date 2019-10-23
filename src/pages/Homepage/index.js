import React from 'react';
import { useTranslation } from 'react-i18next';

const Homepage = () => {
  const { t } = useTranslation();

  return <h2>{t('homepage:title')}</h2>;
};

export default React.memo(Homepage);
