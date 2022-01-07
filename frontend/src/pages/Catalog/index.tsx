import ProdutCard from 'components/ProdutCard';
import './styles.css';
import ButtonBusca from 'components/ButtonBusca';
const Catalog = () => {
  return (
    <div className="container my-4">
      <div className="row page">
        <div className="btn-busca input-group mb-3 input-group-append btn btn-outline-secondary">
          <ButtonBusca />
        </div>
        <div className="col-sm-6 col-lg-4 col-xl-3 ">
          <ProdutCard />
        </div>
        <div className="col-sm-6 col-lg-4 col-xl-3">
          <ProdutCard />
        </div>
        <div className="col-sm-6 col-lg-4 col-xl-3">
          <ProdutCard />
        </div>
        <div className="col-sm-6 col-lg-4 col-xl-3">
          <ProdutCard />
        </div>
        <div className="col-sm-6 col-lg-4 col-xl-3">
          <ProdutCard />
        </div>
        <div className="col-sm-6 col-lg-4 col-xl-3">
          <ProdutCard />
        </div>
        <div className="col-sm-6 col-lg-4 col-xl-3">
          <ProdutCard />
        </div>
        <div className="col-sm-6 col-lg-4 col-xl-3">
          <ProdutCard />
        </div>
      </div>
    </div>
  );
};
export default Catalog;
