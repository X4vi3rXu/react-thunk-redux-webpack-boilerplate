import React, { memo } from 'react';

function LazyComponent() {
  return <div>This is lazy component</div>;
}

export default memo(LazyComponent);
