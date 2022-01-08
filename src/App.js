import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from "./pages/Home";
import About_us from './pages/About_us';
import Contacts from './pages/Contacts';
import Delivery from './pages/Delivery';
import News from './pages/News';
import Personal_cabinet from './pages/Personal_cabinet';
import Navigation from "./components/Navigation";


function App() {
  return (
    <Router>
      <Navigation/>
      <Routes>
      <Route path='/' exact element={<Home/>} />
      <Route path='/about_us' exact element={<About_us/>} />
      <Route path='/contacts' exact element={<Contacts/>} />
      <Route path='/delivery' exact element={<Delivery/>} />
      <Route path='/news' exact element={<News/>} />
      <Route path='/personal_cabinet' exact element={<Personal_cabinet/>} />
      </Routes>
    </Router>
  );
}

export default App;
