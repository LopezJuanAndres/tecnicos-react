import React from 'react';
import {Link,Route,BrowserRouter as Router} from "react-router-dom";
import Agregar  from "./Tecnicos-Componentes/Agregar";
import Editar from "../componentes/Tecnicos-Componentes/Editar";
import Listar from "../componentes/Tecnicos-Componentes/Listar";

class Tecnicos extends React.Component {
    constructor(props) {
      super(props);
      this.state = {  }
    }    
    render() { 
        return (   
            <>
             <Router> 
                <nav className="navbar navbar-expand navbar-dark bg-primary">
                <div className="nav navbar-nav">
                    <Link className="nav-item nav-link" to="/agregar">Agregar</Link>
                    <Link className="nav-item nav-link" to="/editar">Editar</Link>
                    <Link className="nav-item nav-link" to={"/borrar"}>Borrar</Link>
                </div>
            </nav>
              <Listar></Listar>
             <Route path ="/editar" component={Editar}></Route>
             <Route path ="/agregar" component={Agregar}></Route>
             </Router>
             </> );
    }
}
 
export default Tecnicos;