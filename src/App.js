import {useState} from 'react'
import "./App.css";
import Modal from "./components/Modal";
function App() {
  const [show,setShow]=useState(false);
  return (
    <div className="app">
      <button onClick={()=>{setShow(true)}}>Show</button>
      {show? <Modal close={setShow}/> : null}
    </div>
  );
}

export default App;
