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

            <form className="was-validated">
                 

                  <div className="form-check mb-3">
                    <input type="checkbox" class="form-check-input" id="validationFormCheck1" required/>
                    <label className="form-check-label" for="validationFormCheck1">Check this checkbox</label>
                    <div className="invalid-feedback">Example invalid feedback text</div>
                  </div>
                  
                  <div className="form-check">
                  <img src="./Iconos/Musimundo.ico" height ="30" width="25" />
                   <input type="radio" className="form-check-input" id="validationFormCheck2" name="radio-stacked" required/>
                    <label className="form-check-label" for="validationFormCheck2"> Musimundo</label>
                  </div>
                  <div className="form-check">
                  <img src="./Iconos/CreditoA.ico" height ="30" width="25" />
                   <input type="radio" className="form-check-input" id="validationFormCheck2" name="radio-stacked" required/>
                    <label className="form-check-label" for="validationFormCheck2"> Credito Argentino</label>
                  </div>
                  <div className="form-check">
                  <img src="./Iconos/Megatone.ico" height ="30" width="25" />
                   <input type="radio" className="form-check-input" id="validationFormCheck2" name="radio-stacked" required/>
                    <label className="form-check-label" for="validationFormCheck2"> Megatone</label>
                  </div>
                  <div className="form-check mb-3">
                  <img src="./Iconos/logo.ico" height ="30" width="25" />
                    <input type="radio" className="form-check-input" id="validationFormCheck3" name="radio-stacked" required />
                    <label className="form-check-label" for="validationFormCheck3">Conmega</label>
                    <div className="invalid-feedback">More example invalid feedback text</div>
                    <div class="mb-3">
                    <label for="validationTextarea" className="form-label">Descripcion </label>
                    <textarea class="form-control is-invalid" id="validationTextarea" placeholder="Required example textarea"></textarea>
                    <div className="invalid-feedback">
                      Please enter a message in the textarea.
                    </div>
                  </div>

  </div>

  <div className="mb-3">
    <select className="form-select" required aria-label="select example">
      <option value="">Open this select menu</option>
      <option value="1"></option>
      <option value="2"> CSandova</option>
      <option value="3">Megatone</option>
      <option value="3">Conmega</option>
    </select>
    <div className="invalid-feedback">Example invalid select feedback</div>
  </div>

 

  <div className="mb-3">
    <button className="btn btn-primary" type="submit" disabled>Submit form</button>
  </div>
</form>
                <h4 className="card-title">Datos</h4>
                <button type="button" className="btn btn-primary"> <img src="./Iconos/CreditoA.ico" height ="30" width="25" /> Credito Argentino</button>
                <button type="button" className="btn btn-danger"><img src="./Iconos/Musimundo.ico" height ="30" width="25" /> Musimundo</button>
                <button type="button" className="btn btn-dark"><img src="./Iconos/Megatone.ico" height ="30" width="25" /> Megatone </button>
                <button type="button" className="btn btn-secondary"><img src="./Iconos/logo.ico" height ="30" width="25" /> Conmega</button>
              
            </div>
            <div className="card-footer text-muted">
                Footer
            </div>
        </div>);
    }
}
 
export default Agregar;