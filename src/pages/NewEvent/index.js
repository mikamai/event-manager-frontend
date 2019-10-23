import React, { useCallback } from 'react';
import { Col, Row } from 'react-grid-system';
import useForm from 'react-hook-form';
import * as yup from 'yup';

import Button from '/components/Button';
import TextInput from '/components/TextInput';
import Title from '/components/Title';

const validationSchema = yup.object().shape({
  title: yup.string().required(),
  description: yup.string(),
});

const NewEvent = () => {
  const { register, handleSubmit, errors } = useForm({
    validationSchema,
  });
  const onSubmit = useCallback(values => {
    console.log({ values });
  }, []);

  return (
    <Col>
      <Row>
        <Title>newEvent:title</Title>
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
            caption="newEvent:descriptionCaption"
            label="newEvent:descriptionLabel"
            errors={errors}
            ref={register}
          />
        </Row>

        <Row>
          <Button label="newEvent:submitLabel" type="submit" />
        </Row>
      </form>
    </Col>
  );
};

export default React.memo(NewEvent);
