import React from 'react';
import { route } from 'navi';

import NewEvent from '/pages/NewEvent';
import { getRouteTitle } from '/utils';

export default route({
  getTitle: getRouteTitle('routes:newEvent'),
  view: <NewEvent />,
});
