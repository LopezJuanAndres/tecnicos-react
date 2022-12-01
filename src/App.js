
import './App.css';
import Trabajos from "./componentes/Trabajos";
import Tecnicos from "./componentes/Tecnicos";
import Sucursales from "./componentes/Sucursales";
import {  Link,Route,BrowserRouter as Router  } from "react-router-dom";
function App() {
  return (    
       <Router>    
        <nav className="navbar sticky-top  navbar-expand navbar navbar-dark bg-dark">
            <div className="nav navbar-nav">
                <Link className="nav-item nav-link active" to={"/Trabajos"}>Listado de Trabajos </Link>
                <Link  className="nav-item nav-link" to="/Tecnicos">Tecnicos</Link>
                <Link  className="nav-item nav-link" to="/Sucursales">Sucursales</Link>
            </div>
        </nav>
        <div className="container container-fluid text-center table-responsive">            
       <Route exact path ="/" component={Trabajos}></Route>
       <Route path ="/Tecnicos" component={Tecnicos}></Route>
       <Route path ="/Sucursales" component={Sucursales}></Route>
       <Route path ="/Trabajos" component={Trabajos}></Route>

        </div>

        
       
        </Router>
      );
}

export default App;
