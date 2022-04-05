import './App.css';
import Header from './components/Header/Header';
import { Routes, Route } from 'react-router-dom';
import Home from './components/home/Home'
import Reviews from './components/reviews/Reviews';
import Dashboard from './components/dashbosrd/Dashboard';
import ForOFor from './components/forOFor/ForOFor';
import About from './components/about/About'
import Blogs from './components/blogs/Blogs';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/reviews" element={<Reviews></Reviews>}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/blogs" element={<Blogs />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="*" element={<ForOFor />}></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
