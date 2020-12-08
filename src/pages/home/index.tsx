import React from 'react';
// import { Link, useHistory } from 'react-router-dom'
import './index.css';
import {Button} from 'antd';

// let [history, setHistory] = useHistory();
function Home() {
  const qqq = ()=>{
    console.log(1);
    // history.push("/login");
  }

  return (
    <div className="App">
      <Button type="primary" onClick={() => qqq()}>Home</Button>
    </div>
  );
}

export default Home;
