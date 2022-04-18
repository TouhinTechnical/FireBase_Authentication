import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './component/Header/Header';
import Home from './component/Home/Home';
import Login from './component/Login/Login';
import Orders from './component/Orders/Orders';
import Products from './component/Products/Products';
import Register from './component/Register/Register';
import RequireAuth from './component/RequireAuth/RequireAuth';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
        <Route path="/products" element={<Products/>}></Route>
        {/* private Route */}
        <Route path="/orders" element={
          <RequireAuth>
            <Orders/>
          </RequireAuth>
        }></Route>
      </Routes>
    </div>
  );
}

export default App;
