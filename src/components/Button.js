import React from 'react';
import PropTypes from 'prop-types';
import { Button as BaseButton, SHAPE } from 'baseui/button';
import { useTranslation } from 'react-i18next';

const Button = ({ label, ...props }) => {
  const { t } = useTranslation();
  return (
    <BaseButton shape={SHAPE.pill} {...props}>
      {t(label)}
    </BaseButton>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
};

export default React.memo(Button);
