import './App.css'
import HandLogger from './components/HandLogger';
import fs from 'fs';

function App() { 

  const addHandToFile = (handData) => {
    // console.log(handData)
    fetch("http://localhost:3001/save", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(handData),
    });
  }
  
  return (
    <>
      <div>

        <h1>Log your hand below</h1>
        <HandLogger addHandToFile={ addHandToFile } />
      </div>
    </>
  )
}

export default App
