import React from 'react';
import ReactDOM from 'react-dom/client';

console.log('hi');
// const element = React.createElement('div', null, 'React element!');
const element = <div>React element with JSX!</div>

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(element);
