import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { Route, Switch } from 'react-router-dom';
import history from './history';
import { Add } from './pages/Add';
import { Detail } from './pages/Detail';
import { Edit } from './pages/Edit';
import { Error } from './pages/Error';
import { Home } from './pages/Home';
import { NotFound } from './pages/NotFound';
import { Signin } from './pages/Signin';
import { ConnectedRouter } from 'connected-react-router';

function App() {
  return (
    <ErrorBoundary FallbackComponent={Error}>
      <ConnectedRouter history={history}>
        <Switch>
          <Route path="/" exact component={Home} />
          {/* 책에 관련된 라우팅 설정 */}
          <Route path="/signin" component={Signin} />
          <Route path="/add" component={Add} />
          <Route path="/book/:id" component={Detail} />
          <Route path="/edit/:id" component={Edit} />
          {/* 페이지가 없는 라우팅 설정 */}
          <Route path="/*" component={NotFound} />
        </Switch>
      </ConnectedRouter>
    </ErrorBoundary>
  );
}

export default App;
