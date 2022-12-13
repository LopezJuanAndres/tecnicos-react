import React from 'react';

class Finalizados extends React.Component {
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
            <table className="table table-striped table-danger ">
                    <thead className="thead-inverse">
                        <tr>
                            <th>Responsable</th>
                            <th>Empresa</th>
                            <th>Sucursal</th>                  
                            <th>Descripcion</th>
                            <th>Fecha de ini./Fin</th>
                        </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Arindeico</td>
                                <td>Musimundo</td>
                                <td>4-Santo Tome</td>
                                <td> Reemplazo Impr.Laser l02 ........  </td>              
                                <td> 14/11/22-01/12/22</td>
                            </tr>
                            <tr>
                                <td>mbauza</td>
                                <td>Musimundo</td>
                                <td>4-Santo Tome</td>
                                <td> Cambio de pc</td>
                                <td> 14/11/22-01/12/22</td>
                            </tr>
                            <tr>
                                <td>fjordan</td>
                                <td>CA</td>
                                <td>20-Santo Tome</td>
                                <td> Reemplazo Impr.Laser l02 ........</td>
                                <td> 14/11/22-01/12/22</td>
                            </tr>
                        </tbody>
                </table>                   
                     
            </div>
        </div>         
     
        );
    }
}
 
export default Finalizados;