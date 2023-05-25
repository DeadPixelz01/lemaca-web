import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import alpaca_1 from "./img/Lemaca_7.jpeg";
import alpaca_2 from "./img/Lemaca_8.jpeg";
import alpaca_3 from "./img/Lemaca_10.jpeg";
import alpaca_4 from "./img/Lemaca_11.jpeg";


const Herd = () => {
  return (
    <div className="container py-4 py-xl-5">
    <div className="row mb-5">
      <div className="col-md-8 col-xl-6 text-center mx-auto">
        <h2>Our alpacas...</h2>
        <p>Below is a list of our alpacas</p>
      </div>
    </div>
    <div className="row gy-4 row-cols-1 row-cols-md-2 row-cols-xl-3">
      <div className="col">
        <div className="card">
          <img className="card-img-top w-100 d-block fit-cover img-fluid" styles={{height: '200px'}} src={alpaca_1} />
          <div className="card-body p-4">
            <h4 className="card-title">Green Gully Amigo (IAR-221309)</h4>
            <p className="card-text"><strong>DoB: </strong>1/9/2016</p>
            <p className="card-text"><strong>Colour: </strong>Soild True Black</p>
            <p className="card-text"><strong>Sex: </strong>Certified Male</p>
            <p className="card-text"><strong>DNA Certification: </strong>221309</p>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card">
          <img className="card-img-top w-100 d-block fit-cover img-fluid" styles={{height: '200px'}} src={alpaca_2} />
          <div className="card-body p-4">
          <h4 className="card-title">Wynter Delight (IAR-248577)</h4>
            <p className="card-text"><strong>DoB: </strong>3/6/2020</p>
            <p className="card-text"><strong>Colour: </strong>Roan</p>
            <p className="card-text"><strong>Sex: </strong>Female</p>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card">
          <img className="card-img-top w-100 d-block fit-cover img-fluid" styles={{height: '200px'}} src={alpaca_3} />
          <div className="card-body p-4">
            <h4 className="card-title">Greenwood Maceyx (IAR-192038)</h4>
            <p className="card-text"><strong>DoB: </strong>23/5/2016</p>
            <p className="card-text"><strong>Colour: </strong>Soild Bay Black</p>
            <p className="card-text"><strong>Sex: </strong>Female</p>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card">
          <img className="card-img-top w-100 d-block fit-cover img-fluid" styles={{height: '200px'}} src={alpaca_4} />
          <div className="card-body p-4">
            <h4 className="card-title">Lemaca Elfie (IAR-248576)</h4>
            <p className="card-text"><strong>DoB: </strong>24/12/2019</p>
            <p className="card-text"><strong>Colour: </strong>Dark Grey</p>
            <p className="card-text"><strong>Sex: </strong>Wether</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};
  
export default Herd;