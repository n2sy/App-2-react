




import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Views/Home';
import AllFilms from './Views/Allfilms';
import NewFilm from './Views/NewFilm';
import Favorites from './Views/Favorites';
import NavBar from './components/navbar';
import Layout from './components/Layout';
import OneFilm from './Views/OneFilm';
import Login from './components/Login';

function App() {
  return (
    <>
      <NavBar></NavBar>

      <Layout>

        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/allfilms" element={<AllFilms ></AllFilms>}></Route>
          <Route path="/allfilms/:id/:age" element={<OneFilm ></OneFilm>}></Route>
          <Route path="/newfilm" element={<NewFilm></NewFilm>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/favorites" element={<Favorites></Favorites>}></Route>
        </Routes>
      </Layout>
    </>
  );
}

export default App;
