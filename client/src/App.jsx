import React from 'react'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import TermsOfService from './Components/TermsOfService/TermsOfService.jsx/';
import PrivacyPolicy from './Components/PrivacyPolicy/PrivacyPolicy.jsx/';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import ScrollToTop from './Components/ScrollToTop/ScrollToTop'

const App = () => {
  return (
    <Router>
      <div>
        {/* Scroll to top on url change */}
        <ScrollToTop />
        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
        <Contact />
        <Footer />

      </div>
    </Router>
  )
}

export default App;