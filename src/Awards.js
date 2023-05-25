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
                        <th>Year</th>
                        <th>Show</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Green Gully Amigo</td>
                        <td>2nd</td>
                        <td>Huacaya Adult Male - Black (H-KHAM)</td>
                        <td>2018</td>
                        <td>Murwillumbah Alpaca Halter Show</td>
                    </tr>
                    <tr>
                        <td>Green Gully Amigo</td>
                        <td>2nd</td>
                        <td>Huacaya Adult Male - Black (H-KHAM)</td>
                        <td>2018</td>
                        <td>Charles Ledgar Alpaca Halter Show</td>
                    </tr>
                    <tr>
                        <td>Green Gully Amigo</td>
                        <td>1st</td>
                        <td>Huacaya Adult Male - Black (H-KHAM)</td>
                        <td>2018</td>
                        <td>Grafton Colourbration Halter Show</td>
                    </tr>
                    <tr>
                        <td>Green Gully Amigo</td>
                        <td>1st</td>
                        <td>Huacaya Adult Male - Black (H-KHAM)</td>
                        <td>2018</td>
                        <td>Grafton Colourbration Fleece Show</td>
                    </tr>
                    <tr>
                        <td>Green Gully Amigo</td>
                        <td>1st</td>
                        <td>Huacaya Adult Male - Black (H-KHAM)</td>
                        <td>2018</td>
                        <td>Glen Innes New England Fleece Show</td>
                    </tr>
                    <tr>
                        <td>Green Gully Amigo</td>
                        <td>2nd</td>
                        <td>Huacaya Adult Male - Black (H-KHAM)</td>
                        <td>2018</td>
                        <td>Glen Innes New England Halter Show</td>
                    </tr>
                    <tr>
                        <td>Green Gully Amigo</td>
                        <td>1st</td>
                        <td>Huacaya Adult Male - Black (H-KHAM)</td>
                        <td>2018</td>
                        <td>Maleny Fleece Show</td>
                    </tr>
                    <tr>
                        <td>Green Gully Amigo</td>
                        <td>3rd</td>
                        <td>Huacaya Adult Male - Black (H-KHAM)</td>
                        <td>2022</td>
                        <td>Kyneton Fleece Show</td>
                    </tr>
                    <tr>
                        <td>Lemaca Koko Delight</td>
                        <td>3rd</td>
                        <td>XXXXX</td>
                        <td>2022</td>
                        <td>Seymour Halter Show</td>
                    </tr>
                    <tr>
                        <td>Lemaca Koko Delight</td>
                        <td>2nd</td>
                        <td>XXXXX</td>
                        <td>2023</td>
                        <td>Berwick Fleece Show</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
  );
};
  
export default Awards;