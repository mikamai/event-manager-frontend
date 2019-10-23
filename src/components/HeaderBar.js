import React, { useCallback } from 'react';
import { KIND, SIZE } from 'baseui/button';
import {
  HeaderNavigation,
  ALIGN,
  StyledNavigationList,
  StyledNavigationItem,
} from 'baseui/header-navigation';
import { H1 } from 'baseui/typography';
import { useKeycloak } from 'react-keycloak';
import { useNavigation } from 'react-navi';

import Button from '/components/Button';

const HeaderBar = () => {
  const { keycloak } = useKeycloak();
  const { navigate } = useNavigation();

  const onHome = useCallback(() => {
    navigate('/');
  }, [navigate]);

  const onLogin = useCallback(() => {
    keycloak.login();
  }, [keycloak]);

  return (
    <HeaderNavigation>
      <StyledNavigationList $align={ALIGN.left}>
        <StyledNavigationItem>
          <H1 onClick={onHome}>{process.env.APP_NAME}</H1>
        </StyledNavigationItem>
      </StyledNavigationList>

      <StyledNavigationList $align={ALIGN.center} />

      <StyledNavigationList $align={ALIGN.right}>
        <StyledNavigationItem>
          {!keycloak.authenticated ? (
            <Button
              label="header:loginRegister"
              kind={KIND.minimal}
              size={SIZE.compact}
              onClick={onLogin}
            />
          ) : null}
        </StyledNavigationItem>
      </StyledNavigationList>
    </HeaderNavigation>
  );
};

export default React.memo(HeaderBar);
