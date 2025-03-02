import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import IntroAnimation from './components/IntroAnimation';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import RecipeDetails from './pages/RecipeDetails';

function App() {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    // Show intro animation for 3 seconds
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (showIntro) {
    return <IntroAnimation />;
  }

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 text-white">
        <Navbar />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/recipe/:id" element={<RecipeDetails />} />
          </Routes>
        </AnimatePresence>
      </div>
    </Router>
  );
}

export default App;