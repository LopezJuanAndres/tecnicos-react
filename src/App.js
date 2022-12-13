
import './App.css';
import Trabajos from "./componentes/Trabajos";
import Tecnicos from "./componentes/Tecnicos";
import Sucursales from "./componentes/Sucursales";
import Pendientes from "./componentes/Trabajos-Componentes/Pendientes";
import Iniciados from "./componentes/Trabajos-Componentes/Iniciados";
import Finalizados from "./componentes/Trabajos-Componentes/Finalizados";

import {  Link,Route,BrowserRouter as Router  } from "react-router-dom";
function App() {
  return (    
       <Router>    
                <nav class="navbar navbar-expand-lg sticky-top navbar-dark bg-dark">
                <div class="container-fluid">
                    <a class="navbar-brand" href="/">DesktopListJobs</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav bg-dark ">
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Listado de Trabajos
                        </a>
                        <ul class="dropdown-menu bg-dark" aria-labelledby="navbarDropdownMenuLink">
                            <li> <Link className="nav-item nav-link bg-dark " to={"/Pendientes"}>Trabajos Pendientes </Link></li>
                            <li> <Link className="nav-item nav-link bg-dark " to={"/Iniciados"}> Trabajos En Proceso</Link></li>
                            <li><Link className="nav-item nav-link bg-dark " to={"/Finalizados"}> Trabajos Finalizados</Link></li>
                        </ul>
                        </li>                       
                        <li class="nav-item">
                        <Link  className="nav-item nav-link" to="/Tecnicos">Tecnicos</Link>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink2" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Sucursales
                            </a>
                            <ul class="dropdown-menu bg-dark" aria-labelledby="navbarDropdownMenuLink2">
                                <li> <Link  className="nav-item nav-link" to="/Sucursales">Suc. Musimundo</Link></li>
                                <li> <Link className="nav-item nav-link bg-dark " to={"/Iniciados"}>Suc. Credito Argentino</Link></li>
                                <li><Link className="nav-item nav-link bg-dark " to={"/Finalizados"}>Suc. Megatone</Link></li>
                            </ul>                        
                        </li>                        
                    </ul>
                    </div>
                </div>
                </nav>       
        <div className="container  text-center ">            
            <Route exact path ="/" component={Pendientes}></Route>
            <Route path ="/Tecnicos" component={Tecnicos}></Route>
            <Route path ="/Sucursales" component={Sucursales}></Route>
            <Route path ="/Trabajos" component={Trabajos}></Route>
            <Route path ="/Pendientes" component={Pendientes}></Route>
            <Route path ="/Iniciados" component={Iniciados}></Route>
            <Route path ="/Finalizados" component={Finalizados}></Route>
        </div>       
        </Router>
      );
}

export default App;
