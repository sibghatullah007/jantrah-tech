// Import All Relevant CSS
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

// Import Context Provider
import { MainProvider } from './context/MainContext';

// Import All Relevant JS
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

// Import All Relevant Components
import Header from './components/Header';


// Import All Relevant Pages
import Home from './pages/Home'
import About from './pages/About'
import Shop from './pages/Shop'
import Contact from './pages/Contact'
import Cart from './pages/Cart'
import Profile from './pages/Profile'
import Test from './pages/Test'
import View from './pages/View'
import ViewCategory from './pages/ViewCategory.js'
import NoPage from './pages/NoPage';

// Import All Packages
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from './components/Footer';

function App() {
  return (
    <>
    <MainProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="shop" element={<Shop />} />
            <Route path="contact" element={<Contact />} />
            <Route path="cart" element={<Cart />} />
            <Route path="profile" element={<Profile />} />
            <Route path="view" element={<View />} />
            <Route path="viewCategory" element={<ViewCategory />} />
            <Route path="test" element={<Test />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
          <Footer/>
      </MainProvider>
    </>
  );
}

export default App;
