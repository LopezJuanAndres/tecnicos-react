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
              
                <div class="card">
                    <div class="card-header d-md-flex justify-content-md-end">                 
                     <Link className="btn btn-outline-success " to="/agregar" data-bs-toggle="tooltip" data-bs-placement="top" title="Agregar un Tecnico" ><i class="bi bi-person-add"></i> </Link>                    
                    
                    </div>
                    <div class="card-body">
                        <h4 class="card-title">Lista de Tecnicos</h4>
                        <Listar></Listar>
                    </div>                    
                </div>          
                <Route path ="/editar" component={Editar}></Route>
                <Route path ="/agregar" component={Agregar}></Route>
            
             </Router>
             </> );
    }
}
 
export default Tecnicos;