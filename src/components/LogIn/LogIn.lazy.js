import React, { lazy, Suspense } from 'react';

const LazyLogIn = lazy(() => import('./LogIn'));

const LogIn = props => (
  <Suspense fallback={null}>
    <LazyLogIn {...props} />
  </Suspense>
);

export default LogIn;
