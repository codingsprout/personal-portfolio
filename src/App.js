import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Container, Grid } from '@material-ui/core';
import { Footer, Header, Profile } from './components';
import { Resume, Portfolio } from './pages';
import './App.css';

function App() {
  return (
    <Container>
      {/* Plan and split 12 || 12 grid*/}
      <Grid container>
        <Grid item lg={3} md={4} sm={12} xs={12}>
          <Profile />
        </Grid>
        <Grid item xs style={{ backgroundColor: 'red' }}>
          <Header />
          <Router>
            <Switch>
              <Route path='/portfolio'>
                <Portfolio />
              </Route>
              <Route path='/'>
                <Resume />
              </Route>
            </Switch>
          </Router>
          <Footer />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
