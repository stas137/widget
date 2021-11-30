import React, { useState } from 'react';
import './App.css';

const App = () => {

  const [data, setData] = useState(0);

  return (
    <div className="widget__app">
      <h1 className="widget__header">
        Input data
      </h1>
      <div className="widget__inner">
        <input type="number" value={data}></input>
        <button onClick={() => setData(data + 1)}>+</button>
        <button onClick={() => setData(data - 1)}>-</button>
      </div>
    </div>
  );
}

export default App;
