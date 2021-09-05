import React, { memo } from 'react';

function RegularComponent() {
  return <div>This is regular component</div>;
}

export default memo(RegularComponent);
