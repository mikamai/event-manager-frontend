import React from 'react';
import { route } from 'navi';

import Homepage from '/pages/Homepage';
import { getRouteTitle } from '/utils';

export default route({
  getTitle: getRouteTitle('routes:eventDetails'),
  view: <Homepage />,
});
