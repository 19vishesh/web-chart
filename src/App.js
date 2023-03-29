
import Navbar from './component/navbar/Navbar';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Footer from './component/footer/Footer';
import Overview from './pages/overview/Overview';
import Dashboard from './pages/dashboard/Dashboard';

function App() {
  return (
    <BrowserRouter>
     
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Overview />}/>
          <Route exact path="/dashboard" element={<Dashboard />} />
        </Routes>
      
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
