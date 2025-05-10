import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Info from './page/Ex04/Info';
import Login from './page/Ex04/Login';
import Private from './page/Ex04/Private';

function App() {
  return (
    <>  
    {/* bai tap 1  */}
    {/* <BrowserRouter>
    <Routes>
      <Route path='' element={<Home/>}/>
      <Route path='/contact' element={<Contact/>}/>
    </Routes>
    </BrowserRouter> */}
    {/* ************* */}
{/* 
    <BrowserRouter>
<Routes>
      <Route path='addmin' element={<PrivateRouter/>}>
       <Route path='account' element={<Account/>}/>
       <Route path='AdminIndex' element={<AdminIndex/>}/>
       <Route path='oder' element={<Order/>}/>
       </Route>
 </Routes>
    </BrowserRouter> */}



    <BrowserRouter>
    <Routes>

<Route path='/admin' element={ <Private/>}/>
    <Route path='login' element={ <Login/>}/>
    <Route path='account' element={ <Info/>}/>



    </Routes>
    </BrowserRouter>
    </>
  )
}
export default App
