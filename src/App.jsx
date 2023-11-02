import { Routes ,Route} from 'react-router-dom'
import './App.css'
import Login from './Pages/Login'
import SignUp from './Pages/SignUp'
import Home from './Pages/Home'

function App() {
  
  return (
    <>
     <Routes>
        <Route  path='/' element={<SignUp/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/home' element={<Home/>}/>
     </Routes>
    </>
  )
}

export default App
