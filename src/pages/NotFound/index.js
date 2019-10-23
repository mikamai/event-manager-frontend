import React from 'react';

import Title from '/components/Title';
import Text from '/components/Text';

const NotFound = React.memo(() => {
  return (
    <div>
      <Title>notFound:title</Title>
      <Text>notFound:message</Text>
    </div>
  );
});

export default React.memo(NotFound);
