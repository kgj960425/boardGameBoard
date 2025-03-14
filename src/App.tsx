import React, { Suspense } from 'react';
import './App.css'
import { Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage.tsx';
// import TraningPage from './pages/TraningPage.tsx';
import Loading from './pages/Loading.tsx';

// @ts-ignore
const Main = React.lazy(() => import("./pages/LandingPage"))

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
          <Route path="/" element={<LandingPage/>} />
          {/* <Route path="/" element={<TraningPage/>} /> */}
      </Routes>
  </Suspense>
  );
}

export default App
