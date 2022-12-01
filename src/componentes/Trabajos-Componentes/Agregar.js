import React from 'react';
class Agregar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    
    render() { 
        return (  
            <div className="card">
            <div class="card-header">
               Agregar Trabajo
            </div>
            <div className="card-body">
                <h4 className="card-title">Datos</h4>
                <button type="button" className="btn btn-primary ml=5"> <img src="./Iconos/CreditoA.ico" height ="20" width="20" />Credito Argentino</button>
                <button type="button" className="btn btn-danger"><img src="./Iconos/Musimundo.ico" height ="20" width="20" />Musimundo</button>
                <button type="button" className="btn btn-dark"><img src="./Iconos/Megatone.ico" height ="20" width="20" />Megatone</button>
                <button type="button" className="btn btn-secondary"><img src="./Iconos/logo.ico" height ="20" width="20" />Conmega</button>

               
            </div>
            <div className="card-footer text-muted">
                Footer
            </div>
        </div>);
    }
}
 
export default Agregar;