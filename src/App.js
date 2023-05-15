
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from './layout/Navbar';
import Home from './pages/Home';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Addusers from './Users/Addusers';
import Editusers from './Users/Editusers';
import Viewusers from './Users/Viewusers';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
      <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/adduser" element={<Addusers/>}/>
      <Route exact path="/edituser/:id" element={<Editusers/>}/>
      <Route exact path="/viewuser/:id" element={<Viewusers/>}/>
      </Routes>

      </Router>
     
    </div>
  );
}

export default App;
