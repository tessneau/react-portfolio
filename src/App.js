import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Pages from './pages';
import Nav from './components/Nav';
import './style/App.css';

const App = () => {

  return (
    <div className='app-container'>
    <Nav/>
    <Switch>
      <Route exact path='/' component={Pages.Landing} />
      <Route path='/about' component={Pages.About} />
      <Route path='/projects' component={Pages.Projects}/>
      <Route path='/contact' component={Pages.Contact}/>
      <Route component={Pages.NoMatch} />
    </Switch>
    </div>
    )
}

export default App;
