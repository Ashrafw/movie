import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';

import NavBar from './components/NavBar';
import Footer from './components/Footer';
import GenrePage from './pages/genre-page/GenrePage';
import Home from './pages/home/Home';
import Search from './pages/search/Search';

function App() {
    return (
        <div className='App'>
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route path='/movie' element={<Home />} />
                    <Route path='/movie/genre/:id' element={<GenrePage />} />
                    <Route path='/movie/search/:searchid' element={<Search />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;
