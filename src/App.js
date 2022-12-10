
import './App.css';
import Trabajos from "./componentes/Trabajos";
import Tecnicos from "./componentes/Tecnicos";
import Sucursales from "./componentes/Sucursales";
import Pendientes from "./componentes/Trabajos-Componentes/Pendientes";
import {  Link,Route,BrowserRouter as Router  } from "react-router-dom";
function App() {
  return (    
       <Router>    
                <nav class="navbar navbar-expand-lg sticky-top navbar-dark bg-dark">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">ListJobs</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav">
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Listado de Trabajos
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <li><Link className="nav-item nav-link active" to={"/Pendientes"}>Trabajos Pendientes</Link></li>
                            <li><a class="dropdown-item" href="#">Trabajos En Proceso</a></li>
                            <li><a class="dropdown-item" href="#">Trabajos Finalizados</a></li>
                        </ul>
                        </li>
                        <li class="nav-item">
                        <Link className="nav-item nav-link active" to={"/Trabajos"}>Listado de Trabajos </Link>
                        </li>
                        <li class="nav-item">
                        <Link  className="nav-item nav-link" to="/Tecnicos">Tecnicos</Link>
                        </li>
                        <li class="nav-item">
                        <Link  className="nav-item nav-link" to="/Sucursales">Sucursales</Link>
                        </li>                        
                    </ul>
                    </div>
                </div>
                </nav>

       
        <div className="container  text-center ">            
            <Route exact path ="/" component={Trabajos}></Route>
            <Route path ="/Tecnicos" component={Tecnicos}></Route>
            <Route path ="/Sucursales" component={Sucursales}></Route>
            <Route path ="/Trabajos" component={Trabajos}></Route>
            <Route path ="/Pendientes" component={Pendientes}></Route>
        </div>       
        </Router>
      );
}

export default App;
