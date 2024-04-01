//import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Homepage from './Homepage';
import About from './About';
import Testimonials from './Testimonials';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Homepage />
      <About />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
