import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './Navbar.tsx'
import { db } from './firebase.tsx'
import { doc, getDocs, getDoc, collection } from 'firebase/firestore'

function App() {
  const [count, setCount] = useState(0)
  const [test, setTest] = useState<any>()

  // 최초 마운트 시 데이터 가져오기
  useEffect(() => {
    setTest(null)

    const fetchData = async () => {
      await getTest() // Firestore 문서 가져오기
      await fetchCollection() // 전체 컬렉션 가져오기
    }

    fetchData()
  }, [])

  // 단일 문서 가져오기 (비동기 함수)
  const getTest = async () => {
    try {
      const docRef = doc(db, 'product', 'product1')
      const docSnap = await getDoc(docRef)

      if (docSnap.exists()) {
        console.log('Document data:', docSnap.data())
        setTest(docSnap.data())
      }
    } catch (error) {
      console.error('Error fetching document:', error)
    }
  }

  // 컬렉션 가져오기 (비동기 함수)
  const fetchCollection = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'product1'))
      querySnapshot.forEach((doc) => {
        console.log(doc.id, '=>', doc.data())
      })
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }

  return (
    <>
      <Navbar />
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <div>
        {test !== undefined && <div>{test?.name}</div>}
      </div>
    </>
  )
}

export default App
