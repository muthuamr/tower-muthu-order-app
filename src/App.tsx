import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';

import Navigation from './components/Navigation';
import HomePage from './components/LandingPage';
import NewOrderPage from './components/NewOrderPage';

const App: React.FC=()=>{
return (
  <Provider store={store}>
    <Router>
      <div>
        <Navigation />
        <Routes>
          <Route path="/" Component={HomePage}></Route>
          <Route path='/new' Component={NewOrderPage}></Route>
        </Routes>
      </div>
    </Router>
  </Provider>
)
}

export default App;
