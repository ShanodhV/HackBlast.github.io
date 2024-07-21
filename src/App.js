import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import GlobalStyles from './styles/GlobalStyles';
import Header from './components/Header';
import HomePage from './components/HomePage';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Header />
      <HomePage />
      <Footer />
    </Router>
  );
}

export default App;
