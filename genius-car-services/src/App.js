import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import About from './Pages/About/About';
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';
import Page404 from './Pages/404Page/Page404';
import ServiceDetail from './Pages/ServiceDetail/ServiceDetail';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import Checkout from './Pages/Checkout/Checkout';
import RequireAuth from './Pages/RequireAuth/RequireAuth';

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/service/:serviceId' element={<ServiceDetail/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/checkout' element={
          <RequireAuth>
            <Checkout/>
          </RequireAuth>
        }></Route>
        <Route path='*' element={<Page404/>}></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
