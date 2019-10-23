import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { ClientContext, GraphQLClient } from 'graphql-hooks';
import { useKeycloak } from 'react-keycloak';

const GraphQLProvider = ({ children }) => {
  const { initialized, keycloak } = useKeycloak();

  const graphQLClient = new GraphQLClient({
    url: process.env.BACKEND_URL,
    headers: {
      Authorization:
        initialized && !!keycloak.token
          ? `Bearer ${keycloak.token}`
          : undefined,
    },
    logErrors: process.env.NODE_ENV === 'development',
  });

  useEffect(() => {
    graphQLClient.setHeader(
      'Authorization',
      initialized && !!keycloak.token ? `Bearer ${keycloak.token}` : undefined
    );
  }, [graphQLClient, initialized, keycloak.token]);

  return (
    <ClientContext.Provider value={graphQLClient}>
      {React.Children.only(children)}
    </ClientContext.Provider>
  );
};

GraphQLProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default React.memo(GraphQLProvider);
