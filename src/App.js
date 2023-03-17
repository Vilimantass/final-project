
import './App.css';
import { Route, Routes, } from 'react-router-dom'

import MainNav from './Pages/MainNav/MainNav';

import Main from './Pages/Main/Main';
import MyPage from './Pages/MyPage/MyPage';

import Wedding from './Pages/MyPage/SecPage/Wedding';
import Portrait from './Pages/MyPage/SecPage/Portrait';
import Product from './Pages/MyPage/SecPage/Product';
import Nature from './Pages/MyPage/SecPage/Nature';
import ScrollTopButton from './components/ScrollTopButton/ScrollTopButton';






function App() {
  return (
    <div className='App'>
      <ScrollTopButton />
      {/* <MainNav /> */}

      <Routes>

        <Route path='/' element={<Main />} />

        <Route path='/vilimantas' element={<MyPage />} />


        <Route path='/vilimantas/wedding' element={<Wedding />} />
        <Route path='/vilimantas/portrait' element={<Portrait />} />
        <Route path='/vilimantas/product' element={<Product />} />
        <Route path='/vilimantas/nature' element={<Nature />} />
       


     

        {/* <div>
          <h1>404 error. Page not found</h1>
          <Link to='/'>Back to Home page</Link>
        </div> */}

      </Routes>


    </div>
  );
}

export default App;
