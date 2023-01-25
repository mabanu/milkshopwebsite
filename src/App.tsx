import './App.css'
import ResponsiveAppBar from "./components/navbar/navbar";
import ProductsPage from "./components/pages/productsPage";
import {Box} from "@mui/material";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import SingleProductPage from "./components/pages/singleproductPage";
import HomePage from "./components/pages/homePage";
import About from "./components/pages/About";

function App() {

    return (
        <BrowserRouter>
            <Box className='App' sx={{bg: 'secundary'}}>
                <header>
                    < ResponsiveAppBar/>
                </header>
            </Box>
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/products' element={<ProductsPage />} />
                <Route path='/products/:id' element={<SingleProductPage />} />
                <Route path='/about' element={<About />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
