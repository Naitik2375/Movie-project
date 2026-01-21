import './css/App.css'
import NavBar from './components/Navbar';
import Favorite from './pages/Favorites';
import Home from './pages/Home'
import { Routes,Route } from 'react-router-dom';


function App() {

  
  return (
    <>
     <NavBar />
    <main className=' '>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/favorites' element={<Favorite />} />
      </Routes>
    </main>
    </>
  )
}



export default App;
