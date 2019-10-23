import React from 'react';
import PropTypes from 'prop-types';
import { FormControl } from 'baseui/form-control';
import { Input } from 'baseui/input';
import { useTranslation } from 'react-i18next';

const TextInput = React.forwardRef(
  ({ caption, errors, label, name, ...props }, ref) => {
    const { t } = useTranslation();

    return (
      <FormControl
        caption={!!caption ? t(caption) : null}
        error={errors[name] ? errors[name].message : null}
        label={!!label ? t(label) : null}
      >
        <Input {...props} name={name} inputRef={ref} />
      </FormControl>
    );
  }
);

TextInput.propTypes = {
  caption: PropTypes.string,
  errors: PropTypes.shape({}),
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
};

TextInput.defaultProps = {
  caption: '',
  errors: {},
  label: '',
};

export default React.memo(TextInput);
