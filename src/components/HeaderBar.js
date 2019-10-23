import React, { useCallback } from 'react';
import { useKeycloak } from 'react-keycloak';
import { Container, Col, Row } from 'react-grid-system';
import { useTranslation } from 'react-i18next';

const HeaderBar = () => {
  const { t } = useTranslation();
  const { keycloak } = useKeycloak();
  const onLogin = useCallback(() => {
    keycloak.login();
  }, [keycloak]);

  return (
    <Container fluid>
      <Row>
        <Col md={3}>{process.env.APP_NAME}</Col>
        <Col md={6}></Col>
        <Col align="end" md={3}>
          <span onClick={onLogin}>{t('header:loginRegister')}</span>
        </Col>
      </Row>
    </Container>
  );
};

export default React.memo(HeaderBar);
