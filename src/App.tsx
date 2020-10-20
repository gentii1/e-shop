import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

//Components
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';

//Pages
import { Home } from './pages/Home/Home';
import { Product } from './pages/Product/Product';
import { ErrorPage } from './pages/ErrorPage/ErrorPage';

//Styles
import './App.scss';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Product" component={Product} />
          <Route component={ErrorPage} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
