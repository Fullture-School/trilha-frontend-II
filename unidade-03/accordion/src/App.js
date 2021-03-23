import React from 'react';
import { Accordion } from './component';
import { listActitvies } from './mock';
import { DesktopStyle } from './component/styles/styles.default';

function App() {  
  return (
    <div className="App">
        <Accordion listActitvies={listActitvies} style={DesktopStyle()} />
    </div>
  );
}

export default App;
