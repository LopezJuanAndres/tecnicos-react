import React from 'react';
import {Link  } from "react-router-dom";
class Listar extends React.Component {
    constructor(props) {
      super(props);
      this.state = {  }
    }    
    render() { 
        return (  
        <table className="table table-striped table-inverse table-responsive">
        <thead className="thead-inverse">
            <tr>
                <th>Solicitante</th>
                <th>Empresa</th>
                <th>Sucursal</th>                  
                <th>Descripcion</th>
                <th>Estado</th>
            </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Jalopez</td>
                    <td>Musimundo</td>
                    <td>4-Santo Tome</td>
                    <td> Reemplazo Impr.Laser l02 ........  </td>
                    <td>4-Santo Tome</td>
                    <td>
                       <div className="btn-group" role="group" aria-label="">
                        <Link className="btn btn-primary" to={"/editar"}>Editar</Link>
                        <button  type="button" class="btn btn-danger" >Terminar</button>
                       
                       </div>
                        
                    </td>
                </tr>
            </tbody>
    </table>);
    }
}
 
export default Listar;