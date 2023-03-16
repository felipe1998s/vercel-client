import { Home, Landing, NotFound } from './views'
import { Routes, Route, useLocation } from "react-router-dom";
import './App.css'
import { NavBar } from './components';

function App() {

  const location = useLocation();
  console.log(location);

  return (
    <div className="App">
      {location.pathname!=="/"?<NavBar></NavBar>:<></>}
      <Routes>
        <Route index element={<Landing/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='*' element={<NotFound/>}></Route>
      </Routes>
    </div>
  )
}

export default App
