import React from 'react';

 /**import {Link  } from "react-router-dom";**/
class Listar extends React.Component {
    constructor(props) {
      super(props);
      this.state = {  }
    }    
    render() { 
        return (  
            <div className='table-responsive-lg '>
                <h3 className='bg-primary  '>Trabajos Pendientes</h3>
        <table className="table table-striped table-primary">
        <thead className="thead-inverse  ">
            <tr>
                <th>Solicitante</th>
                <th>Empresa</th>
                <th>Sucursal</th>                  
                <th>Descripcion</th>               
                <th>Acciones</th>
            </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Jalopez</td>
                    <td>Musimundo</td>
                    <td>4-Santo Tome</td>
                    <td> Reemplazo Impr.Laser l02 ........  </td>                   
                    <td>
                        <div className="btn-group" role="group" aria-label="">
                        <button className="btn btn-primary" to={"/editar"} data-bs-toggle="modal" data-bs-target="#addjobs"   data-bs-placement="top" title="Comenzar Trabajo"><i className="bi bi-play-btn-fill"></i></button>
                        <button  type="button" class="btn btn-warning" data-bs-toggle="tooltip" data-bs-placement="top" title="Editar trabajo" ><i class="bi bi-pencil-square"></i></button>
                       </div>                        
                    </td>
                </tr>
                <tr>
                <td>mbauza</td>
                <td>Musimundo</td>
                <td>4-Santo Tome</td>
                <td> Reemplazo Impr.Laser l02 ........</td>
                <td>
                    <div className="btn-group" role="group" aria-label="">
                    <button className="btn btn-primary" to={"/editar"} data-bs-toggle="tooltip" data-bs-placement="top" title="Comenzar Trabajo"  data-bs-target="#exampleModal"><i class="bi bi-play-btn-fill"></i></button>
                        <button  type="button" class="btn btn-warning" data-bs-toggle="tooltip" data-bs-placement="top" title="Editar trabajo" ><i class="bi bi-pencil-square"></i></button>
                   </div>                        
                </td>
            </tr>
            <tr>
                <td>mbauza</td>
                <td>Musimundo</td>
                <td>4-Santo Tome</td>
                <td> Reemplazo Impr.Laser l02 ........</td>
                <td>
                    <div className="btn-group" role="group" aria-label="">
                    <button className="btn btn-primary" to={"/editar"} data-bs-toggle="tooltip" data-bs-placement="top" title="Comenzar Trabajo"  data-bs-target="#exampleModal"><i class="bi bi-play-btn-fill"></i></button>
                        <button  type="button" class="btn btn-warning" data-bs-toggle="tooltip" data-bs-placement="top" title="Editar trabajo" ><i class="bi bi-pencil-square"></i></button>
                   </div>                        
                </td>
            </tr>
            <tr>
                <td>mbauza</td>
                <td>Musimundo</td>
                <td>4-Santo Tome</td>
                <td> Reemplazo Impr.Laser l02 ........</td>
                <td>
                    <div className="btn-group" role="group" aria-label="">
                    <button className="btn btn-primary" to={"/editar"} data-bs-toggle="tooltip" data-bs-placement="top" title="Comenzar Trabajo"  data-bs-target="#exampleModal"><i class="bi bi-play-btn-fill"></i></button>
                        <button  type="button" class="btn btn-warning" data-bs-toggle="tooltip" data-bs-placement="top" title="Editar trabajo" ><i class="bi bi-pencil-square"></i></button>
                   </div>                        
                </td>
            </tr>
            <tr>
                <td>mbauza</td>
                <td>Musimundo</td>
                <td>4-Santo Tome</td>
                <td> Reemplazo Impr.Laser l02 ........</td>
                <td>
                    <div className="btn-group" role="group" aria-label="">
                    <button className="btn btn-primary" to={"/editar"} data-bs-toggle="tooltip" data-bs-placement="top" title="Comenzar Trabajo"  data-bs-target="#exampleModal"><i class="bi bi-play-btn-fill"></i></button>
                        <button  type="button" class="btn btn-warning" data-bs-toggle="tooltip" data-bs-placement="top" title="Editar trabajo" ><i class="bi bi-pencil-square"></i></button>
                   </div>                        
                </td>
            </tr>
            <tr>
                <td>mbauza</td>
                <td>Musimundo</td>
                <td>4-Santo Tome</td>
                <td> Reemplazo Impr.Laser l02 ........</td>
                <td>
                    <div className="btn-group" role="group" aria-label="">
                    <button className="btn btn-primary" to={"/editar"} data-bs-toggle="tooltip" data-bs-placement="top" title="Comenzar Trabajo"  data-bs-target="#exampleModal"><i class="bi bi-play-btn-fill"></i></button>
                        <button  type="button" class="btn btn-warning" data-bs-toggle="tooltip" data-bs-placement="top" title="Editar trabajo" ><i class="bi bi-pencil-square"></i></button>
                   </div>                        
                </td>
            </tr>
            <tr>
                <td>mbauza</td>
                <td>Musimundo</td>
                <td>4-Santo Tome</td>
                <td> Reemplazo Impr.Laser l02 ........</td>
                <td>
                    <div className="btn-group" role="group" aria-label="">
                    <button className="btn btn-primary" to={"/editar"} data-bs-toggle="tooltip" data-bs-placement="top" title="Comenzar Trabajo"  data-bs-target="#exampleModal"><i class="bi bi-play-btn-fill"></i></button>
                        <button  type="button" class="btn btn-warning" data-bs-toggle="tooltip" data-bs-placement="top" title="Editar trabajo" ><i class="bi bi-pencil-square"></i></button>
                   </div>                        
                </td>
            </tr>
                <tr>
                    <td>Jalopez</td>
                    <td>Musimundo</td>
                    <td>4-Santo Tome</td>
                    <td> Reemplazo Impr.Laser l02 ........  </td>                    
                    <td>
                        <div className="btn-group" role="group" aria-label="">
                        <button className="btn btn-primary" to={"/editar"} data-bs-toggle="tooltip" data-bs-placement="top" title="Comenzar Trabajo"  data-bs-target="#exampleModal"><i class="bi bi-play-btn-fill"></i></button>
                        <button  type="button" class="btn btn-warning" data-bs-toggle="tooltip" data-bs-placement="top" title="Editar trabajo" ><i class="bi bi-pencil-square"></i></button>
                                               
                       </div>                        
                    </td>
                </tr>
            </tbody>
    </table>  
    <br></br> 
    <h3 className='bg-success text-white sticky-top'>Trabajos En Proceso</h3> 
    <table className="table table-striped table-success ">
    <thead className="thead-inverse">
        <tr>
            <th>Responsable</th>
            <th>Empresa</th>
            <th>Sucursal</th>                  
            <th>Descripcion</th>
            <th>Acciones</th>
        </tr>
        </thead>
        <tbody>
            <tr>
                <td>Arindeico</td>
                <td>Musimundo</td>
                <td>4-Santo Tome</td>
                <td> Reemplazo Impr.Laser l02 ........  </td>              
                <td>
                    <div className="btn-group" role="group" aria-label="">
                    <button  type="button" class="btn btn-danger" data-bs-toggle="tooltip" data-bs-placement="top" title="Terminar trabajo" ><i class="bi bi-stop-circle"></i></button>                       
                    <button  type="button" class="btn btn-warning" data-bs-toggle="tooltip" data-bs-placement="top" title="Editar trabajo" ><i class="bi bi-pencil-square"></i></button>              
                   </div>                        
                </td>
            </tr>
            <tr>
                <td>mbauza</td>
                <td>Musimundo</td>
                <td>4-Santo Tome</td>
                <td> Cambio de pc</td>
                <td>
                    <div className="btn-group" role="group" aria-label="">
                    <button  type="button" class="btn btn-danger" data-bs-toggle="tooltip" data-bs-placement="top" title="Terminar trabajo" ><i class="bi bi-stop-circle"></i></button>                       
                    <button  type="button" class="btn btn-warning" data-bs-toggle="tooltip" data-bs-placement="top" title="Editar trabajo" ><i class="bi bi-pencil-square"></i></button>
                   </div>                        
                </td>
            </tr>
            <tr>
                <td>fjordan</td>
                <td>CA</td>
                <td>20-Santo Tome</td>
                <td> Reemplazo Impr.Laser l02 ........</td>
                <td>
                    <div className="btn-group" role="group" aria-label="">
                    <button  type="button" class="btn btn-danger" data-bs-toggle="tooltip" data-bs-placement="top" title="Terminar trabajo" ><i class="bi bi-stop-circle"></i></button>                       
                    <button  type="button" class="btn btn-warning" data-bs-toggle="tooltip" data-bs-placement="top" title="Editar trabajo" ><i class="bi bi-pencil-square"></i></button>
                   </div>                        
                </td>
            </tr>
        </tbody>
</table>
<div className="modal fade" id="addjobs" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Asignacion de Trabajo</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <select className="form-select col-2 form-select-sm" aria-label="Default select example">
             <option selected>Selecciona el Tecnico</option>
             <option value="1">jalopez</option>
             <option value="2">mbauza</option>
             <option value="3">arindeic</option>
        </select>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
        <button type="button" className="btn btn-primary"> Comenzar </button>
      </div>
    </div>
  </div>
</div>
</div>    
    ); }
}
 
export default Listar;