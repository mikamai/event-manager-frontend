import React, { useCallback } from 'react';
import { Col, Row } from 'react-grid-system';
import useForm from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import * as yup from 'yup';

import TextInput from '/components/TextInput';

const validationSchema = yup.object().shape({
  title: yup.string().required(),
  description: yup.string(),
});

const NewEvent = () => {
  const { t } = useTranslation();
  const { register, handleSubmit, errors } = useForm({
    validationSchema,
  });
  const onSubmit = useCallback(values => {
    console.log({ values });
  }, []);

  return (
    <Col>
      <Row>
        <h2>{t('newEvent:title')}</h2>
      </Row>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Row justify="start">
          <TextInput
            name="title"
            label="newEvent:titleLabel"
            errors={errors}
            ref={register}
          />
        </Row>

        <Row>
          <TextInput
            name="description"
            label="newEvent:descriptionLabel"
            errors={errors}
            ref={register}
          />
        </Row>

        <Row>
          <input type="submit" />
        </Row>
      </form>
    </Col>
  );
};

export default React.memo(NewEvent);
