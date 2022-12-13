import React from 'react';

class Iniciados extends React.Component {
    constructor(props) {
      super(props);
      this.state = {  }
    }    
    render() { 
        return (          
            <div className="card table-responsive">
            <div className="card-header "> 
             <div className="row justify-content-md-end">                       
               <div className='col-3 d-md-flex ' >
                 <button className="btn btn btn-outline-success mr-5" to="/agregar" data-bs-toggle="tooltip" data-bs-placement="top" title="Agregar Trabajo de la Lista" ><i class="bi bi-clipboard2-plus-fill"></i>Agregar</button>
                 <button className="btn btn-outline-danger" to={"/borrar"} data-bs-toggle="tooltip" data-bs-placement="top" title="Eliminar Trabajo de la Lista" ><i class="bi bi-clipboard2-x-fill"></i>Eliminar</button>        
               </div>         
             </div>
           </div> 
         <div className="card-body table-responsive-xs ">
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
        </div>         
      </div>      
        );
    }
}
 
export default Iniciados;