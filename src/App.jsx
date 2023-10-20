import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar/NavBar'

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <NavBar />

        <Routes>
          <Route path="/" element={<p>Home</p>} />
          <Route path="/about" element={<p>About</p>} />
          <Route path="/contact" element={<p>Contact</p>} />
          <Route path="*" element={<p>Not Found</p>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App
