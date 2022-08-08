import './App.css';
import Navbar from './Components/Navbar';
import { Routes, Route } from 'react-router-dom'
import APITesting from './Components/APITesting'
import Home from './Components/Home';
import FirebaseRealTimeDB from './Components/FirebaseRealTimeDB';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/API' exact element={<APITesting />} />
        <Route path='/Firebase' exact element={<FirebaseRealTimeDB />} />
      </Routes>
    </>
  );
}

export default App;
