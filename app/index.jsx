import React from 'react';
import ReactDom from 'react-dom';
import Profile from './Profile';

function App() {
  const props = {
    name: 'kyle',
    age: 13
  };
  return (
    <div className="container">
      <h1>Hello React</h1>
      <Profile {...props} />
    </div>
  );
}
const app = document.createElement('div');
document.body.appendChild(app);
ReactDom.render(<App />, app);
