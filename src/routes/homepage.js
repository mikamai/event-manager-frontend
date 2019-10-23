import React from 'react';
import { route } from 'navi';

import Homepage from '/pages/Homepage';

export default route({
  title: process.env.APP_NAME,
  view: <Homepage />,
});
