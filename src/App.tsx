import { useState } from 'react'
import './App.css'
import Navbar from './Navbar.tsx'
import firebase from 'firebase/compat/app';

function App() {
  const [count, setCount] = useState(0)
  const db = firebase.firestore();
  db.collection('product').get().then((result)=>{
    console.log(result);
  })
  return (
    <>
      <Navbar />
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        개에똥같은
      </p>
    </>
  )
}

export default App
