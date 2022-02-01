import logo from "./logo.svg";
import "./App.css";
import Header from "./components/layouts/Header";
import Footer from "./components/layouts/Footer";
import "./assets/css/bootstrap.min.css";
import "./assets/css/style.css";
import "./assets/css/responsive.css";
import Home from "./components/Home/Home";
import {BrowserRouter,Route, Routes} from 'react-router-dom' 
import Faqs from "./components/Faqs/Faqs";
function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="faqs" element={<Faqs/>}/>
          </Routes>
        </BrowserRouter>
        <Footer />
      </div>
    </div>
  );
}

export default App;
