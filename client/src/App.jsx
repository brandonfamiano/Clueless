
 import {Route, Routes} from 'react-router-dom';
 import Index from './pages/index'
import Login from './pages/Login';
import Layout from './Layout';
import Register from './pages/Register';
import axios from 'axios';
import { UserContextProvider } from './pages/UserContext';
import Wardrobe from './pages/Wardrobe';
import Account from './pages/Account';

axios.defaults.baseURL ='http://localhost:4000'
axios.defaults.withCredentials = true;
function App() {
  return (
    <UserContextProvider>
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<Index/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path ='/wardrobe' element={<Wardrobe/>}/>
        <Route path ='/account' element={<Account/>}/>
      </Route>  
    </Routes>
    </UserContextProvider>
  )
}

export default App;
