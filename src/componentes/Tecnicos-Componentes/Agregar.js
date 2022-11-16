import React from 'react';
class Agregar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    
    render() { 
        return (  <div className="card">
            <div class="card-header">
               Agregar Tecnico
            </div>
            <div className="card-body">
                <h4 className="card-title">Title</h4>
                <p className="card-text">Text</p>
            </div>
            <div className="card-footer text-muted">
                Footer
            </div>
        </div>);
    }
}
 
export default Agregar;