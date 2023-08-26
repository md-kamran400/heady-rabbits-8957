import logo from './logo.svg';
import './App.css';
import AllProducts from './components/AllProducts';
import Navbar from './Component/Navbar';
import Allroutes from './Router/Allroutes';
import Sidebar from './Component/Sidebar';
import Footer from './Component/Footer';

function App() {
  return (
    <div className="App">
   <Navbar/>
 <Allroutes/>  
<Sidebar/>
<Footer/>


</div>
  );
}

export default App;