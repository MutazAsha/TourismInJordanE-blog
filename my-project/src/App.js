import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import BrowserRouter as Router
import Blogs from './Component/BlogForm';
// import Blog from './Component/Blog';
import Footer from './Component/Footer';
import Headar from './Component/Headar';
import Home from './Pages/Home';
import SignUp from './Pages/SignUp';
import SignIn from './Pages/SignIn';

function App() {
  return (
    <div className="App">
      <Router> {/* Wrap your entire application with the Router */}
       <Headar /> 
       
       <Routes>
        
          <Route path="/" element={<Home />} />
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/blogs" element={<Blogs />} /> 
          {/* <Route path="/Blog" element={<Blog />} />  */}
        </Routes>
        {/* <Blog/> */}
        <Footer />
      </Router>
    </div>
  );
}

export default App;
