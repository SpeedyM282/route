import React from 'react';
import Route from './Router/Route';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';

function App() {
  return (
    <div>
      <Route exact path='/' component={Page1} />
      <Route path='/page2' component={Page2} />
      <Route path='/page3' component={Page3} />
    </div>
  );
}

export default App;
