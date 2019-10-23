import Keycloak from 'keycloak-js';
import React, { Suspense } from 'react';
import { ScreenClassProvider } from 'react-grid-system';
import { KeycloakProvider } from 'react-keycloak';
import { Router, View } from 'react-navi';
import HelmetProvider from 'react-navi-helmet-async';

import GraphQLProvider from '/components/GraphQLProvider';
import Layout from '/components/Layout';
import '/i18n';
import routes from '/routes';

const keycloak = new Keycloak({
  url: process.env.KEYCLOAK_URL,
  realm: process.env.KEYCLOAK_REALM,
  clientId: process.env.KEYCLOAK_CLIENT_ID,
});

const App = () => (
  <ScreenClassProvider>
    <KeycloakProvider keycloak={keycloak}>
      <GraphQLProvider>
        <HelmetProvider>
          <Router routes={routes}>
            <Layout>
              <Suspense fallback={null}>
                <View />
              </Suspense>
            </Layout>
          </Router>
        </HelmetProvider>
      </GraphQLProvider>
    </KeycloakProvider>
  </ScreenClassProvider>
);

export default React.memo(App);
