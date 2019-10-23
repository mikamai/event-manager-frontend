import React from 'react';
import PropTypes from 'prop-types';
import { H2 } from 'baseui/typography';
import { useTranslation } from 'react-i18next';

const Title = ({ children, ...props }) => {
  const { t } = useTranslation();
  return <H2>{t(children)}</H2>;
};

Title.propTypes = {
  children: PropTypes.string.isRequired,
};

export default React.memo(Title);
