import React from 'react';
import { route } from 'navi';

import Login from '/pages/Login';

export default route(async request => ({
  view: <Login />,
}));
