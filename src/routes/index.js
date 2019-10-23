import { mount, lazy } from 'navi';

import HomepageRoute from './homepage';

// Define routes using mount(), route(), and other middleware.
const routes = mount({
  '/': HomepageRoute,
  '/events': lazy(() => import('./events')),
  '/login': lazy(() => import('./login')),
});

export default routes;
