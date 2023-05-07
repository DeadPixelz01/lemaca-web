import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

const Awards = () => {
  return (
<div className="container py-4 py-xl-5">
        <div className="row mb-5">
            <div className="col-md-8 col-xl-6 text-center mx-auto">
                <h2>Our awards...</h2>
                <p>Below is a list of awards Lemaca has won over the years...</p>
            </div>
        </div>
        <div className="table-responsive">
            <table className="table">
                <thead>
                    <tr>
                        <th>Alpaca (Name)</th>
                        <th>Place</th>
                        <th>Competition</th>
                        <th>Date (DD/MM/YYYY)</th>
                        <th>Show</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Green Gully Amigo</td>
                        <td>2nd</td>
                        <td>Huacaya Adult Male - Black (H-KHAM)</td>
                        <td>30/06/2018</td>
                        <td>2018 Murwillumbah Alpaca Halter Show</td>
                    </tr>
                    <tr>
                        <td>Text</td>
                        <td>Text</td>
                        <td>Text</td>
                        <td>Cell 3</td>
                        <td>Cell 4</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
  );
};
  
export default Awards;