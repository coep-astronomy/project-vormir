import React, { Suspense, lazy } from 'react';

// Libraries
import { CssBaseline, ThemeProvider, makeStyles } from '@material-ui/core';
import { Router, Route, Switch } from 'react-router-dom';

// Configs and Utils
import theme from './utils/theme';
import createBrowserHistory from './utils/createBrowserHistory';

// Components
const HomePage = lazy(() => import('./screens/Home'));

// Styles
const useStyles = makeStyles(() => ({
  loader: {
    width: '100vw',
    height: '100vh',
  },
}));

function App(): JSX.Element {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Router history={createBrowserHistory}>
        <Suspense fallback={<div className={classes.loader} />}>
          <Switch>
            <Route exact path='/' component={HomePage} />
          </Switch>
        </Suspense>
      </Router>
    </ThemeProvider>
  );
}

export default App;
