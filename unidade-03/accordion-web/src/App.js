import React from 'react';
import { Accordion } from 'fullture-accordion';
import { DesktopStyle } from 'fullture-accordion/dist/styles/styles.web';
import { listActitvies } from './mock';

function App() {
  return (
    <div className="App">
      <Accordion listActitvies={listActitvies} style={DesktopStyle()} platform="web" />
    </div>
  );
}

export default App;
