import './App.css';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Home } from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import { Products } from './pages/Products';
import { Team } from './pages/Team';

function App() {
    return (
        <div className="App">
            <Header/>
            <Routes>
                <Route path={"/"} element={<Home/>}/>
                <Route path={"/team"} element={<Team/>}/>
                <Route path={"/products"} element={<Products/>}/>
            </Routes>
            <Footer/>
        </div>
    );
}

export default App;
