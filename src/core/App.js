import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';

import theme from './theme';
import { history } from '../common/history';
import ProjectLayout from '../layouts/project';
import HomeLayout from '../layouts/home'

function App() {
  return (
    <MuiPickersUtilsProvider utils={MomentUtils}>
      <ThemeProvider theme={theme}>
        <Router history={history}>
          <Switch>
          <Route exact path='/' Component={HomeLayout} />
            <Route path='/home' component={HomeLayout} />
            <Route path='/search' component={HomeLayout} />
            <Route path='/project' component={ProjectLayout} />
            <Route path='/calender' component={HomeLayout} />
            <Route path='/my_tasks' component={HomeLayout} />
            <Route path='/utilization' component={HomeLayout} />
            <Route path='/growth' component={HomeLayout} />
          </Switch>
        </Router>
      </ThemeProvider>
    </MuiPickersUtilsProvider >
  );
}

export default App;


