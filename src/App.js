import React from 'react';
import './App.scss';
import Accordion from './components/advanced-react/react-composition-compound-component/Accordion';
import Editable from './components/advanced-react/react-composition-compound-component/Editable';

function App() {
  return (
    <div className="app">
      <Accordion></Accordion>
      <Editable></Editable>
    </div>
  );
}

export default App;
