import React from 'react';
import { route } from 'navi';

import Events from '/pages/Events';
import { getRouteTitle } from '/utils';

export default route({
  getTitle: getRouteTitle('routes:events'),
  view: <Events />,
});
