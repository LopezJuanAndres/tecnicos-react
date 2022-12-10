import React from 'react';

class Sucursales extends React.Component {
    constructor(props) {
      super(props);
      this.state = {  }
    }    
    render() { 
        return ( 
          
          <div class="accordion" id="accordionPanelsStayOpenExample">
        <div class="accordion-item">
          <h2 class="accordion-header" id="panelsStayOpen-headingOne">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
             Sucursales Musimundo
            </button>
          </h2>
          <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
            <div class="accordion-body">
              <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                       <img src="./Iconos/CreditoA.ico" height ="20" width="20" />   Sucursales Credito Argentino
            </button>
          </h2>
          <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
            <div class="accordion-body">
            <table className="table table-striped table-primary ">
    <thead className="thead-inverse">
        <tr>
            <th>Numero</th>
            <th>Provincia</th>
            <th>Localidad</th>                  
            <th>Cluster</th>
            <th>Acciones</th>
         </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>Santa Fe</td>
                <td>Peatonal San Martin</td>
                <td>Appcluster01.megared.int </td>              
                <td>
                    <div className="btn-group" role="group" aria-label="">
                    <button  type="button" class="btn btn-danger" data-bs-toggle="tooltip" data-bs-placement="top" title="Borrar sucursal" ><i class="bi bi-building-fill-x"></i></button>                       
                    <button  type="button" class="btn btn-warning" data-bs-toggle="tooltip" data-bs-placement="top" title="Editar sucursal"><i class="bi bi-building-gear"></i></button>              
                   </div>                        
                </td>
            </tr>
            <tr>
                <td>101</td>
                <td>Chaco</td>
                <td>Charata</td>
                <td>Appcluster01.megared.int </td>              
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
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
              Sucursales Megatone
            </button>
          </h2>
          <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
            <div class="accordion-body">
              <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
          </div>
        </div>
      </div>);
    }
}
 
export default Sucursales;