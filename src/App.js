import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from './Home'
import Details from './Details'
import Settings from './Settings'
import NotFound from './NotFound'

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/Details/:id' exact component={Details} />
            <Route path='/*' component={NotFound} />
          </Switch>
        </BrowserRouter>
        <p>
         ******************************************************************** I am a footer.. ********************************************************************
        </p>
      </div>
    );
  }
}

export default App;
