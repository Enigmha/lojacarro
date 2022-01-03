import { ReactComponent as Carro } from 'asset/images/main-image.svg';
import Navbar from 'components/Navbar';
import './styles.css';
import ButtonIcon from 'components/ButtonIcon';

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="home-container">
        <div className="home-card">
            <div className="home-2panding">
          <div className="home-content-container">
            <h1>Carro perfeito para você</h1>
            <p>
              Conheça nossos carros e dê mais um passo na realização do seu
              sonho
            </p>
          </div>
          <div className="home-img-container">
            <Carro />
          </div>
          </div>
          <div className="home-button">
            <ButtonIcon />
            <h6>comece agora navegar</h6>

          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
