import { mount, lazy } from 'navi';

import EventsList from './eventsList';

// Define routes using mount(), route(), and other middleware.
export default mount({
  '/': EventsList,
  '/new': lazy(() => import('./newEvent')),
  '/:id': lazy(() => import('./eventDetails')),
});
