import React from 'react';
import { useTranslation } from 'react-i18next';

const Login = () => {
  const { t } = useTranslation();

  return <h2>{t('login:title')}</h2>;
};

export default React.memo(Login);
