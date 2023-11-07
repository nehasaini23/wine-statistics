// App.tsx
import React from 'react';
import Flavanoids from './components/Flavanoids';
import Gamma from './components/Gamma';

function App() {
  return (
    <div>
      <h1>Wine Data Statistics</h1>
      <h4>Flavanoids</h4>
      <Flavanoids/>{/* Render the Flavanoids component */}
      <h4>Gamma</h4>
      <Gamma/>{/* Render the Gamma component */}
    </div>
  );
}

export default App;
