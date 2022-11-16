import React from 'react';
import {Link  } from "react-router-dom";
class Listar extends React.Component {
    constructor(props) {
      super(props);
      this.state = {  }
    }    
    render() { 
        return (  <table className="table table-striped table-inverse table-responsive">
            <thead className="thead-inverse">
                <tr>
                    <th>Nombre y Apellido</th>
                    <th>Usuario</th>
                    <th>Equipo</th>
                    <th>Acciones</th>
                </tr>
                </thead>
                <tbody>
                    <tr>
                        <td > Juan Andres Lopez</td>
                        <td>Jalopez</td>
                        <td>4</td>
                        <td>
                           <div className="btn-group" role="group" aria-label="">
                            <Link className="btn btn-primary" to={"/editar"}>Editar</Link>
                            <button  type="button" class="btn btn-danger" >Borrar</button>
                           
                           </div>
                            
                        </td>
                    </tr>
                </tbody>
        </table>);
    }
}
 
export default Listar;