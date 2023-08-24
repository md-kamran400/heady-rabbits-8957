import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Navbar';
import Sidebar from './Component/Sidebar';
import Home from './Component/Home';
import Allroutes from './Router/Allroutes';
import Footer from './Component/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Allroutes />
      <Sidebar />
      <Footer />
    </div>
  );
}

export default App;
