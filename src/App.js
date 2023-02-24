
import {Route ,Routes} from 'react-router-dom'

//css
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

//page
import RegisterPage from './pages/Register';
import LoginPage from './pages/Login';
import MyNavbar from './components/Navbar';
import ListingPage from './pages/List';
import HomePage from './pages/Home';

function App() {
  return (
    <div>
      <MyNavbar></MyNavbar>
    <Routes>
      <Route path='/' element={<HomePage/>}></Route>
      <Route path='/login' element={<LoginPage/>}></Route>
      <Route path='/register' element={<RegisterPage/>}></Route>
      <Route path='/book/list' element={<ListingPage/>}></Route>
    </Routes>
    </div>
  );
}

export default App;
