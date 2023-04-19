import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
import ContactUs from './pages/ContactUs'

function App() {

  return (
    <Router>
      <div className='color'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
