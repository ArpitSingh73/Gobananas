import './App.css';

import Navbar from './components/navbar';
import List from './components/list';
import { useState } from 'react';
function App() {
    const [data, setData] = useState([]);

  return (
    <div className="App">
      <Navbar data={data} setData={setData}></Navbar>
      <List data={data}></List>
    </div>
  );
}

export default App;
