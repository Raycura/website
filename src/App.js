import './App.css';
import Contact from './Contact';
import Billing from './components/Billing';
import CongratulationsCard from './components/CongratulationsCard';
import Home from './components/Home';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Ortho from './components/Ortho';
import OrthoProduct from './components/OrthoProduct';
import Physio from './components/Physio';

function App() {
  return (
    <>
      <Navbar/>
      {/* <Home/> */}
      {/* <Physio/> */}
      {/* <Billing/> */}
      {/* <CongratulationsCard/> */}
      {/* <Login/> */}
      {/* <Ortho/> */}
      <OrthoProduct/>
    </>
  );
}

export default App;
