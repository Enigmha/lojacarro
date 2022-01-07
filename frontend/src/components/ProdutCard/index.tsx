import './styles.css';

import CarroImg from 'asset/images/carro.png';

const ProdutCard = () => {
  return (
   
      <div className="base-card product-card">
        <div className="card-top-container">
          <img src={CarroImg} alt="nome do produto" />
        </div>
        <div className="card-bottom-container">
          <h6>Audi Supra TT</h6>
          <p> Audi TT RS Coupé impressiona na esportividade. Com o seu design e seus avanços técnicos de ponta.</p>
        </div>
      </div>
  );
};
export default ProdutCard;
