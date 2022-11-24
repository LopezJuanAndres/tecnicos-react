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
              <div className="card table-responsive">
            <div className="card-header">
               Lista de Trabajos
            </div>
            <div className="card-body table-responsive-xs gap-2 d-md-flex justify-content-md-end">     
                   <Link className="btn btn btn-outline-success mr-5" to="/agregar" data-bs-toggle="tooltip" data-bs-placement="top" title="Agregar un trabajo a la Lista" ><i class="bi bi-clipboard2-plus-fill"></i> Agregar</Link>
                   <Link className="btn btn-outline-danger" to={"/borrar"} data-bs-toggle="tooltip" data-bs-placement="top" title="Eliminar trabajo de la Lista" ><i class="bi bi-clipboard2-x-fill"></i>Eliminar</Link>
                                      
                    
                     <Route path ="/Listar" component={Listar}></Route>
                     <Route path ="/agregar" component={Agregar}></Route>
                     <Route path ="/editar" component={Editar}></Route>
            </div>
            <div className="card-footer">
            <Listar></Listar>
            </div>
        </div>

         
                     </Router>
        );
    }
}
 
export default Trabajos;