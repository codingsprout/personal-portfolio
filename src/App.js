import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Container, Grid } from '@material-ui/core';
import { Footer, Header, Profile } from './components';
import { Resume, Portfolio, Service } from './pages';
import './App.css';

function App() {
  return (
    <Container className={'top_60'}>
      {/* Plan and split 12 || 12 grid*/}
      <Grid container spacing={7}>
        <Grid item lg={3} md={4} sm={12} xs={12}>
          <Profile />
        </Grid>
        <Grid item xs>
          <Router>
            <Header />
            <div className='main__content container__shadow'>
              <Switch>
                <Route path='/service'>
                  <Service />
                </Route>
                <Route path='/portfolio'>
                  <Portfolio />
                </Route>
                <Route path='/'>
                  <Resume />
                </Route>
              </Switch>
            </div>
          </Router>
          <Footer />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
