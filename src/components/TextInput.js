import React from 'react';
import PropTypes from 'prop-types';
import { Col, Row } from 'react-grid-system';
import { useTranslation } from 'react-i18next';

const TextInput = React.forwardRef(({ errors, label, name, ...props }, ref) => {
  const { t } = useTranslation();

  return (
    <Col xs="content">
      <Row>
        <span>{!!label ? t(label) : null}</span>
      </Row>

      <Row>
        <input type="text" {...props} name={name} ref={ref} />
      </Row>

      {errors[name] ? (
        <Row>
          <span>{errors[name].message}</span>
        </Row>
      ) : null}
    </Col>
  );
});

TextInput.propTypes = {
  errors: PropTypes.shape({}),
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
};

TextInput.defaultProps = {
  errors: {},
  label: '',
};

export default React.memo(TextInput);
