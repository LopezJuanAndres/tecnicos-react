import React from 'react';
import {Link  } from "react-router-dom";
class Listar extends React.Component {
    constructor(props) {
      super(props);
      this.state = {  }
    }    
    render() { 
        return (  
            <div className='table-responsive-lg'>
        <table className="table table-striped ">
        <thead className="thead-inverse">
            <tr>
                <th>Solicitante</th>
                <th>Empresa</th>
                <th>Sucursal</th>                  
                <th>Descripcion</th>
                <th>Estado</th>
                <th>Acciones</th>
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
                        <Link className="btn btn-primary" to={"/editar"} data-bs-toggle="tooltip" data-bs-placement="top" title="Comenzar Trabajo"><i class="bi bi-play-btn-fill"></i></Link>
                        <button  type="button" class="btn btn-warning" data-bs-toggle="tooltip" data-bs-placement="top" title="Editar trabajo" ><i class="bi bi-pencil-square"></i></button>
                        <button  type="button" class="btn btn-danger" data-bs-toggle="tooltip" data-bs-placement="top" title="Terminar trabajo" ><i class="bi bi-stop-circle"></i></button>                       
                       </div>                        
                    </td>
                </tr>
                <tr>
                    <td>Jalopez</td>
                    <td>Musimundo</td>
                    <td>4-Santo Tome</td>
                    <td> Reemplazo Impr.Laser l02 ........  </td>
                    <td>4-Santo Tome</td>
                    <td>
                        <div className="btn-group" role="group" aria-label="">
                        <Link className="btn btn-primary" to={"/editar"} data-bs-toggle="tooltip" data-bs-placement="top" title="Comenzar Trabajo"><i class="bi bi-play-btn-fill"></i></Link>
                        <button  type="button" class="btn btn-warning" data-bs-toggle="tooltip" data-bs-placement="top" title="Editar trabajo" ><i class="bi bi-pencil-square"></i></button>
                        <button  type="button" class="btn btn-danger" data-bs-toggle="tooltip" data-bs-placement="top" title="Terminar trabajo" ><i class="bi bi-stop-circle"></i></button>                       
                       </div>                        
                    </td>
                </tr>

            </tbody>
    </table>
    </div>);
    }
}
 
export default Listar;