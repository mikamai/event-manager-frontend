import React from 'react';
import PropTypes from 'prop-types';
import { Paragraph1 } from 'baseui/typography';
import { useTranslation } from 'react-i18next';

const Text = ({ children, ...props }) => {
  const { t } = useTranslation();
  return <Paragraph1>{t(children)}</Paragraph1>;
};

Text.propTypes = {
  children: PropTypes.string.isRequired,
};

export default React.memo(Text);
