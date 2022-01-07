import ProdutCard from 'components/ProdutCard';
import './styles.css';

const Catalog = () => {
  return (
    <div className="container my-4">
      <div className="row page">
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
