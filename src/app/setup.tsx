import * as React from 'react';
import * as ReactDOM from 'react-dom';

const App: React.FC = () => {
  return (
    <h1>Hello World</h1>
  );
}

export const setupApp = () => {
  ReactDOM.render(<App />, document.querySelector('#root'));
}
