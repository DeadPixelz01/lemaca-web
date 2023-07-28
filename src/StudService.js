import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import alpaca_1 from "./img/Lemaca_7.jpeg";

const StudService= () => {
  return (
    <div className="container py-4 py-xl-5">
    <div className="row mb-5">
      <div className="col-md-8 col-xl-6 text-center mx-auto">
        <h2>Stud Service</h2>
        <p>On rare occasion, we do offer a stud service if a male alpaca is on the farm at the time.</p>
        <p>Prices are not at a set rate as of yet - contact us either by email or phone for a fee. <br></br>Our current studs can be found below.</p>
      </div>
    </div>
    <div className="row gy-4 row-cols-md row-cols-xl">
      <div className="col">
        <div className="card">
          <div className="card-body p-4">
            <h4 className="card-title">Green Gully Amigo (IAR-221309) - <a href="/herd">Photos</a></h4>
            <p className="card-text"><strong>DoB: </strong>1/9/2016</p>
            <p className="card-text"><strong>Colour: </strong>Soild True Black</p>
            <p className="card-text"><strong>Sex: </strong>Certified Male</p>
            <p className="card-text"><strong>DNA Certification: </strong>221309</p>
            <p className="card-text"><strong>Sire: </strong>Jolimont Essien</p>
            <p className="card-text"><strong>Dam: </strong>Green Gully Anoushka</p>
            <p className="card-text"><strong>Type: </strong>Huacaya</p>
            <h4 id="2018awards" className='text-center'>Show results</h4><hr style={{color: 'blue'}}></hr>
            <div className="table-responsive text-center">
            <table className="table text-center">
                <thead>
                    <tr>
                        <th>Alpaca (Name)</th>
                        <th>Place</th>
                        <th>Competition</th>
                        <th>Year</th>
                        <th>Show</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Green Gully Amigo</td>
                        <td>2nd</td>
                        <td>Huacaya Adult Male - Black</td>
                        <td>2018</td>
                        <td>Murwillumbah Alpaca Halter Show</td>
                    </tr>
                    <tr>
                        <td>Green Gully Amigo</td>
                        <td>2nd</td>
                        <td>Huacaya Adult Male - Black</td>
                        <td>2018</td>
                        <td>Charles Ledgar Alpaca Halter Show</td>
                    </tr>
                    <tr>
                        <td>Green Gully Amigo</td>
                        <td>1st</td>
                        <td>Huacaya Adult Male - Black</td>
                        <td>2018</td>
                        <td>Grafton Colourbration Halter Show</td>
                    </tr>
                    <tr>
                        <td>Green Gully Amigo</td>
                        <td>1st</td>
                        <td>Huacaya Adult Male (Intermediate) - Black</td>
                        <td>2018</td>
                        <td>Grafton Colourbration Fleece Show</td>
                    </tr>
                    <tr>
                        <td>Green Gully Amigo</td>
                        <td>1st</td>
                        <td>Huacaya Adult Male - Black</td>
                        <td>2018</td>
                        <td>Glen Innes New England Fleece Show</td>
                    </tr>
                    <tr>
                        <td>Green Gully Amigo</td>
                        <td>2nd</td>
                        <td>Huacaya Adult Male (Intermediate) - Black</td>
                        <td>2018</td>
                        <td>Glen Innes New England Halter Show</td>
                    </tr>
                    <tr>
                        <td>Green Gully Amigo</td>
                        <td>1st</td>
                        <td>Huacaya Adult Male (Intermediate) - Black</td>
                        <td>2018</td>
                        <td>Maleny Fleece Show</td>
                    </tr>
                    <tr>
                        <td>Green Gully Amigo</td>
                        <td>3rd</td>
                        <td>Huacaya Senior Male - Black</td>
                        <td>2022</td>
                        <td>Kyneton Fleece Show</td>
                    </tr>
                </tbody>
            </table>
        </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};
  
export default StudService;