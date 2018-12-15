import React from 'react';
import CytoscapeComponent from 'react-cytoscapejs';

class App extends React.Component {

  render(){
    const elements = [
       { data: { id: 1, label: 'Lean Analytics' }, position: { x: 100, y: 100 } },
       { data: { id: 2, label: 'アントレプレナーの教科書' }, position: { x: 100, y: 200 } },
       { data: { source: 1, target: 2, label: 'Edge from Node1 to Node2' } }
    ];

    return <CytoscapeComponent elements={elements} style={ { width: '600px', height: '600px' } } />;
  }
}

export default App;