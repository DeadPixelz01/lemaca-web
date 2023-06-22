import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import alpaca_1 from "./img/Lemaca_7.jpeg";
import alpaca_2 from "./img/Lemaca_8.jpeg";
import alpaca_3 from "./img/Lemaca_10.jpeg";
import alpaca_4 from "./img/Lemaca_11.jpeg";
import alpaca_5 from "./img/Koko-picture.jpg";


const Herd = () => {
  return (
    <div className="container py-4 py-xl-5">
    <div className="row mb-5">
      <div className="col-md-8 col-xl-6 text-center mx-auto">
        <h2>Our alpacas...</h2>
        <p>Below is a detailed history of the alpacas Lemaca has owned over the years. We are very proud of each and every one of them as they all brought something new to our farm.</p>
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
            <p className="card-text">Amigo was purchased from Green Gully Alpacas
which are located in New South Wales and transported to Victoria. Amigo was purchased as a
certified male to extend the growth of our black alpaca breeding program. Amigo has proven to be
an asset to our breeding succussion of the coloured black alpacas.</p>
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
            <p className="card-text">Wynter is our second born cria and was
birthed by Greenwood MaceyX. Wynter has a very carefree attitude and will be the first to greet
anyone who comes to the property or stops by the gate. Wynter has achieved excellent show results
in both fleece and halter to which we hope to extend to her cria in the very near future.</p>
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
            <p className="card-text">Macey was one of the first alpacas to arrive at
our property and the first alpaca of ours to be entered into alpaca fleece shows. To our surprise we
achieved show results with her quality fleece. Her high standard quality fleece has now been
extended to her cria’s who have also had success in both fleece and halter shows. Macey has a
very gentle but shy temperament and is the type to stand back in the herd until she gets accustom
to you.</p>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card">
          <img className="card-img-top w-100 d-block fit-cover img-fluid" styles={{height: '200px'}} src={alpaca_5} />
          <div className="card-body p-4">
            <h4 className="card-title">Lemaca Koko Delight (IAR-248578)</h4>
            <p className="card-text"><strong>DoB: </strong>22/02/2022</p>
            <p className="card-text"><strong>Colour: </strong>Solid Bay Black</p>
            <p className="card-text"><strong>Sex: </strong>Female</p>
            <p className="card-text">Koko is our third born cria and was second to
be birthed by Greenwood MaceyX. Koko has followed in her mother and sister’s footsteps and
continues to show a high quality fleece. Koko has also accomplished show results in both fleece and
halter. Koko has a very inquisitive nature.</p>
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
            <p className="card-text">Elfie is our first born cria birthed by Wahroogah Dede on
Christmas Eve, hence the name. Elfie’s fleece is not to a show standard and for this reason he has
been wethered. Elfie has a very friendly personally, he will always meet us at the gate. Elfie plays
the role of keeping our certified males company.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};
  
export default Herd;