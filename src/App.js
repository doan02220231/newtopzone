import {Routes,Route} from 'react-router-dom'
import './App.css';
import HomePages from './components/pages/HomePage/HomePage';

const  App = () => {
  return (
    <>
    <Routes>
        <Route path='/' element={<HomePages/>}/>
    </Routes>
    </>
     
  );
}

export default App;
