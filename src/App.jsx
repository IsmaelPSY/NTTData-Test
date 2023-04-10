import { Route, Routes } from 'react-router-dom';
import { Employess } from './pages/Employees';
import { Home } from './pages/Home';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/employees' element={<Employess/>}/>
      </Routes>
    </div>
  )
}

export default App
