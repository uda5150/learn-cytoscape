import React from 'react';
import CytoscapeComponent from 'react-cytoscapejs';

class App extends React.Component {

  render(){
    const elements = [
       { data: { id: 1, label: 'Lean Analytics' } },
       { data: { id: 2, label: 'アントレプレナーの教科書' } },
       { data: { id: 3, label: 'スタートアップ・マニュアル' } },
       { data: { id: 4, label: 'マネジメント' } },
       { data: { id: 5, label: 'リーン・スタートアップ' } },
       { data: { id: 6, label: 'Running Lean' } },
       { data: { id: 10, label: 'イノベーションへの解' } },
       { data: { id: 22, label: 'イノベーションのジレンマ' } },
       { data: { id: 26, label: 'キャズム Ver.2' } },
       { data: { id: 34, label: '起業の科学' } },
       { data: { id: 37, label: 'ゼロ・トゥ・ワン' } },
       { data: { id: 47, label: 'ビジネス・クリエーション' } },
       { data: { source: 1, target: 2, label: 'Edge from Node1 to Node2' } },
       { data: { source: 1, target: 3, label: 'Edge from Node1 to Node3' } },
       { data: { source: 1, target: 4, label: 'Edge from Node1 to Node4' } },
       { data: { source: 1, target: 5, label: 'Edge from Node1 to Node4' } },
       { data: { source: 1, target: 6, label: 'Edge from Node1 to Node4' } },
       { data: { source: 1, target: 10, label: 'Edge from Node1 to Node4' } },
       { data: { source: 5, target: 2, label: 'Edge from Node1 to Node3' } },
       { data: { source: 5, target: 6, label: 'Edge from Node1 to Node3' } },
       { data: { source: 5, target: 10, label: 'Edge from Node1 to Node3' } },
       { data: { source: 5, target: 22, label: 'Edge from Node1 to Node3' } },
       { data: { source: 5, target: 26, label: 'Edge from Node1 to Node3' } },
       { data: { source: 34, target: 1, label: 'Edge from Node1 to Node3' } },
       { data: { source: 34, target: 3, label: 'Edge from Node1 to Node3' } },
       { data: { source: 34, target: 5, label: 'Edge from Node1 to Node3' } },
       { data: { source: 34, target: 6, label: 'Edge from Node1 to Node3' } },
       { data: { source: 34, target: 22, label: 'Edge from Node1 to Node3' } },
       { data: { source: 34, target: 26, label: 'Edge from Node1 to Node3' } },
       { data: { source: 37, target: 22, label: 'Edge from Node1 to Node3' } },
       { data: { source: 47, target: 2, label: 'Edge from Node1 to Node3' } },
       { data: { source: 47, target: 5, label: 'Edge from Node1 to Node3' } },
       { data: { source: 47, target: 6, label: 'Edge from Node1 to Node3' } },
       { data: { source: 47, target: 26, label: 'Edge from Node1 to Node3' } },
    ];
    // styleが表示空間でstylesheetがnodeとかedgeの設定か・・・
    const stylesheet = [
      {
        selector: 'node',
        style: {
          content: 'data(label)',
          width: 20,
          height: 20,
          'background-color': '#11479e'
        }
      },
      {
        selector: 'edge',
        style: {
          'target-arrow-shape': 'triangle',
          'curve-style': 'bezier',
          'target-arrow-color': '#9dbaea',
          'line-color': '#9dbaea',
          width: 2
        }
      }
    ]

    const layout = {
      name: 'random'
    }

    return <CytoscapeComponent elements={elements} style={{width: '600px', height: '600px'}} stylesheet={stylesheet} layout={layout}/>;
  }
}

export default App;