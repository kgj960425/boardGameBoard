import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './Navbar.tsx'
// import firebase from 'firebase/compat/app';

// firebase.js에서 db를 iWmport
import { db } from './firebase.tsx';
// firestore의 메서드 import
import { doc, getDocs , getDoc , collection } from 'firebase/firestore';

function App() {
  const [count, setCount] = useState(0)
  const [test, setTest] = useState<any>()

  // 최초 마운트 시에 getTest import
  useEffect(() => {
    setTest(null)
    fetchData()
  }, [])
    
    // document에 대한 참조 생성
    const docRef = doc(db, "product", "product1");
    // 참조에 대한 Snapshot 쿼리
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      setTest(docSnap.data())
    }
  
  // async - await로 데이터 fetch 대기
  const fetchData = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "product1"));
      querySnapshot.forEach((doc) => {
        console.log(doc.id, "=>", doc.data());
      });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  
  return (
    <>
      <Navbar />
      {/* <div>
        {test !== undefined &&
        <div>{test.name}</div>}
      </div> */}
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
      <div>
        {test !== undefined &&
        <div>{test.name}</div>}
      </div>
    </>
  )
}

export default App
