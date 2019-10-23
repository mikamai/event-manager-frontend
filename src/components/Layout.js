import React from 'react';
import BusyIndicator from 'react-busy-indicator';
import { Container } from 'react-grid-system';
import { NotFoundBoundary, useLoadingRoute } from 'react-navi';

import HeaderBar from '/components/HeaderBar';
import NotFound from '/pages/NotFound';

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

export default React.memo(Layout);
