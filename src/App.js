




import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Views/Home';
import AllFilms from './Views/Allfilms';
import NewFilm from './Views/NewFilm';
import Favorites from './Views/Favorites';
import NavBar from './components/navbar';

function App() {
  return (
    <>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/allfilms" element={<AllFilms></AllFilms>}></Route>
        <Route path="/newfilm" element={<NewFilm></NewFilm>}></Route>
        <Route path="/favorites" element={<Favorites></Favorites>}></Route>
      </Routes>
    </>

  );
}

export default App;