import React, { lazy, Suspense, memo } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';

const NoMatch = lazy(
  () => import(/* webpackChunkName: "NoMatch" */ '#/modules/NoMatch')
);
const RootPage = lazy(
  () => import(/* webpackChunkName: "RootPage" */ '#/modules/RootPage')
);
const AsyncDemo = lazy(
  () => import(/* webpackChunkName: "AsyncDemo" */ '#/modules/asyncDemo')
);
const SyncDemo = lazy(
  () => import(/* webpackChunkName: "SyncDemo" */ '#/modules/syncDemo')
);
const LazyDemo = lazy(
  () => import(/* webpackChunkName: "LazyDemo" */ '#/modules/lazyLoadDemo')
);

function Routes() {
  return (
    <React.Fragment>
      <Header />
      <div id="modules">
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route path="/" exact component={RootPage} />
            <Route path="/lazy" exact component={LazyDemo} />
            <Route path="/async" exact component={AsyncDemo} />
            <Route path="/sync" exact component={SyncDemo} />
            <Route path="/nomatch" exact component={NoMatch} />
            <Route component={NoMatch} />
          </Switch>
        </Suspense>
      </div>
    </React.Fragment>
  );
}

Routes.propTypes = {};

export default memo(Routes);
