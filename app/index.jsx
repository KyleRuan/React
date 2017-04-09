import React from 'react';
import ReactDom from 'react-dom';

function App() {
  return (
    <div className="container">
      <h1>Hello World</h1>
    </div>
  );
}
const app = document.createElement('div');
document.body.appendChild(app);
ReactDom.render(<App />, app);
