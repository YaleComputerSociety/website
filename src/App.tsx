import './App.css';
import { Footer } from './components/Footer';
import Header from './components/Header';
import { Home } from './pages/Home';
import { Route, Routes, useLocation } from 'react-router-dom';
import { Products } from './pages/Products';
import { Team } from './pages/Team';
import { CourseTable } from './pages/products/CourseTable';
import { Ymeets } from './pages/products/Ymeets';
import { AutoDonation } from './pages/products/AutoDonation';
import { useEffect } from 'react';
import { Yalies } from './pages/products/Yalies';
import { YaleButteries } from './pages/products/YaleButteries';
import { MealMatch } from './pages/products/MealMatch';
import { RoomAdvisor } from './pages/products/RoomAdvisor';
import { Events } from './pages/Events';

const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    });
}

function App() {

    const location = useLocation();

    useEffect(() => {
        scrollToTop()
    }, [location]);

    useEffect(() => {
        if (window.scrollY !== 0) {
            scrollToTop()
        }
    }, [])

    return (
        <div className="App">
            <Header/>
            <Routes>
                <Route path={"/"} element={<Home/>}/>
                <Route path={"/team"} element={<Team/>}/>
                <Route path={"/events"} element={<Events/>}/>
                <Route path={"/products"} element={<Products/>}/>
                <Route path={"/products/CourseTable"} element={<CourseTable/>}/>
                <Route path={"/products/Ymeets"} element={<Ymeets/>}/>
                <Route path={"/products/Autodonation"} element={<AutoDonation/>}/>
                <Route path={"/products/Yalies"} element={<Yalies/>}/>
                <Route path={"/products/YaleButteries"} element={<YaleButteries/>}/>
                <Route path={"/products/MealMatch"} element={<MealMatch/>}/>
                <Route path={"/products/RoomAdvisor"} element={<RoomAdvisor/>}/>
            </Routes>
            <Footer/>
        </div>
    );
}

export default App;
