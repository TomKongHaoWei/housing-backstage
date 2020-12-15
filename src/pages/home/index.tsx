import React from 'react';
import { Link, useHistory } from 'react-router-dom'
import './index.css';
import {Button} from 'antd';

console.log(2);

// let [history, setHistory] = useHistory();
function Home() {
  const qqq = ()=>{
    console.log(1);
    // history.push("/login");
  }

  return (
    <div className="home">
      <Button type="primary" onClick={() => qqq()}>Home</Button>
    
      <Link to="/login"><button>login</button></Link>
    </div>
  );
}

export default Home;
