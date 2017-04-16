import React from 'react';
import ReactDom from 'react-dom';
import Profile from './Profile';

function App() {
  const props = {
    name: 'kyle',
    age: 13
  };
  const profile = (<Profile {...props} />);
  return (
    <div className="container">
      <h1>Hello React</h1>
      <Profile {...props} />
      <h2>use var</h2>
      {profile}
    </div>
  );
}
const app = document.createElement('div');
document.body.appendChild(app);
ReactDom.render(<App />, app);
