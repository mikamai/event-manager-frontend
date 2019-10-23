import React from 'react';
import { useTranslation } from 'react-i18next';

const Events = () => {
  const { t } = useTranslation();

  return <h2>{t('events:title')}</h2>;
};

export default React.memo(Events);
