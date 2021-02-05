import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../global/GlobalStyles';
import { dark, light } from '../global/theme';
import Header from '../components/Header/Header';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import Home from './Home';
import Country from './Country';
import { CountryProvider } from '../context/CountryContext';

const Root: React.FC = () => {
  const [isThemeDark, setIsThemeDark] = useState(false);

  return (
    <CountryProvider>
      <Router>
        <ThemeProvider theme={isThemeDark ? dark : light}>
          <GlobalStyles />
          <Header state={{ isThemeDark, setIsThemeDark }} />
          <main>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/country/:id" component={Country} />
              <Redirect to="/" />
            </Switch>
          </main>
        </ThemeProvider>
      </Router>
    </CountryProvider>
  );
};

export default Root;
