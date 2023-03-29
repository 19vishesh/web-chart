
import Navbar from './component/navbar/Navbar';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Footer from './component/footer/Footer';
import Overview from './pages/overview/Overview';
import Dashboard from './pages/dashboard/Dashboard';
import Analytics from './pages/analytics/Analytics';
import Statistics from './pages/statistics/Statistics';

function App() {
  return (
    <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/statistics" element={<Statistics />} />
          <Route exact path="/" element={<Overview />}/>
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route exact path="/analytics" element={<Analytics />} />
        </Routes>
      
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
