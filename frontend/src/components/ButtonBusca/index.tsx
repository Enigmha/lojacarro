import './styles.css';

const ButtonBusca = () => {
    return(    

<div className="input-group mb-3">
    <input type="text" className="form-control" placeholder="digite sua busca" aria-label="digite sua busca" aria-describedby="button-addon2"/>
  <div className="input-group-append">
    <button className="btn btn-outline-secondary" type="button" id="button-addon2">Busca</button>
  </div>
</div>

   

    );
    
}

export default ButtonBusca;