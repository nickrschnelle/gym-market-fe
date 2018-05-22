import React from 'React';
import ReactDOM from 'react-dom';
import HomePage from './components/home-page/home-page';

const App = () => (
  <HomePage/>  
);

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);