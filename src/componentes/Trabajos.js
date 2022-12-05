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
              <div className="card-header "> 
                <div className="row">
              <div class="input-group  mb-3 ">
               <input type="text" class="form-control col-3" placeholder="Buscar" aria-label="Recipient's username" aria-describedby="button-addon2"/>
               <button class="btn btn-outline-secondary" type="button" id="button-addon2">Buscar trabajo</button>
               <div className='col-3 d-md-flex justify-content-md-end' >
              <Link className="btn btn btn-outline-success mr-5" to="/agregar" data-bs-toggle="tooltip" data-bs-placement="top" title="Agregar un trabajo a la Lista" ><i class="bi bi-clipboard2-plus-fill"></i> Agregar</Link>
              <Link className="btn btn-outline-danger" to={"/borrar"} data-bs-toggle="tooltip" data-bs-placement="top" title="Eliminar trabajo de la Lista" ><i class="bi bi-clipboard2-x-fill"></i>Eliminar</Link>        
              </div> 
             </div>
                   
            </div>
            </div> 
            <div className="card-body table-responsive-xs ">
            <div class="accordion" id="accordionPanelsStayOpenExample">
                <div class="accordion-item">
                    <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                    <button class="accordion-button text-info" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                        Trabajos Pendientes
                    </button>
                    </h2>
                    <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                    <div class="accordion-body">       
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
                    </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
                    <button class="accordion-button collapsed text-success " type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                    Trabajos En Proceso
                    </button>
                    </h2>
                    <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                    <div class="accordion-body">
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
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="panelsStayOpen-headingThree">
                    <button class="accordion-button collapsed text-danger" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                    Trabajos Finalizados
                    </button>
                    </h2>
                    <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                    <div class="accordion-body">
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
                </div>
            </div>
                     <Route path ="/Listar" component={Listar}></Route>
                     <Route path ="/agregar" component={Agregar}></Route>
                     <Route path ="/editar" component={Editar}></Route>
            </div>
        </div>         
        </Router>
        );
    }
}
 
export default Trabajos;