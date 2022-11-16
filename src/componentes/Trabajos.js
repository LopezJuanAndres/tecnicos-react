import React from 'react';
import {Link,Route,BrowserRouter as Router} from "react-router-dom";
import Agregar  from "../componentes/Trabajos-Componentes/Agregar";
import Editar from "../componentes/Trabajos-Componentes/Editar";
import Listar from "../componentes/Trabajos-Componentes/Listar";


class Trabajos extends React.Component {
    constructor(props) {
      super(props);
      this.state = {  }
    }
    
    render() { 
        return (   
        <Router>      
             <nav className="navbar navbar-expand  bg-info">
                <div className="nav navbar-nav">
                    <Link className="nav-item nav-link" to="/agregar">Agregar</Link>
                    <Link className="nav-item nav-link" to="/editar">Editar</Link>
                    <Link className="nav-item nav-link" to={"/borrar"}>Borrar</Link>
                </div>
            </nav>
            <Listar></Listar>
                     <Route path ="/Listar" component={Listar}></Route>
                     <Route path ="/agregar" component={Agregar}></Route>
                     <Route path ="/editar" component={Editar}></Route>
                     </Router>
        );
    }
}
 
export default Trabajos;