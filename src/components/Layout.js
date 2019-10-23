import React from 'react';
import BusyIndicator from 'react-busy-indicator';
import { Container } from 'react-grid-system';
import { useTranslation } from 'react-i18next';
import { NotFoundBoundary, useLoadingRoute } from 'react-navi';

import HeaderBar from './HeaderBar';

const Layout = ({ children }) => {
  // If there is a route that hasn't finished loading, it can be
  // retrieved with `useLoadingRoute()`.
  const loadingRoute = useLoadingRoute();

  return (
    <div className="Layout">
      {/* This component shows a loading indicator after a delay */}
      <BusyIndicator isBusy={!!loadingRoute} delayMs={200} />

      <HeaderBar />

      <Container>
        <NotFoundBoundary render={() => <NotFound />}>
          {children}
        </NotFoundBoundary>
      </Container>
    </div>
  );
};

const NotFound = React.memo(() => {
  const { t } = useTranslation();

  return (
    <div className="Layout-error">
      <h2>{t('notFound:title')}</h2>
      <p>{t('notFound:message')}</p>
    </div>
  );
});

export default React.memo(Layout);
