import React, { lazy, Suspense } from 'react';

const LazyMyMenu = lazy(() => import('./MyMenu'));

const MyMenu = props => (
  <Suspense fallback={null}>
    <LazyMyMenu {...props} />
  </Suspense>
);

export default MyMenu;
