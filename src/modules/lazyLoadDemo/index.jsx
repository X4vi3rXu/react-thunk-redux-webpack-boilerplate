import React, { lazy, Suspense, useState } from 'react';
import RegularComponent from './components/RegularComponent';

const LazyComponent = lazy(
  () => import(/* webpackChunkName: "lazy" */ './components/LazyComponent')
);

function LazyDemo() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>React Lazy Load Demo</h1>
      <button className="square" onClick={() => setCount((prev) => prev + 1)}>
        Click Me
      </button>
      <RegularComponent />
      <Suspense fallback={<div>Loading</div>}>
        {count % 2 ? <LazyComponent /> : null}
      </Suspense>
    </div>
  );
}

export default LazyDemo;
