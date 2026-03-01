import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HoleBackground } from '@/components/animate-ui/components/backgrounds/hole';
import { Navbar } from '@/components/Navbar';
import { CloudDevelopment } from '@/pages/CloudDevelopment';
import './App.css';

function Home() {
  return (
    <div className="w-full h-screen relative bg-white overflow-hidden">
      <Navbar />
      <HoleBackground className="absolute inset-0 flex items-center justify-center" />
    </div>
  );
}

function CloudDevelopmentPage() {
  return (
    <div className="w-full min-h-screen relative">
      <Navbar />
      <CloudDevelopment />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cloud-development" element={<CloudDevelopmentPage />} />
      </Routes>
    </Router>
  );
}

export default App;
