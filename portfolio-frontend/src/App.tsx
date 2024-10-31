
import './App.css';

import AdminPage from './components/AdminPage';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';

function App() {


  return (

        <Router>
          <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/admin' element={<AdminPage/>}/>
          </Routes>
        </Router>

  );
}

export default App;
