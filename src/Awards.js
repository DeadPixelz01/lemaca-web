import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { HashLink } from 'react-router-hash-link';

const Awards = () => {
  return (
<div className="container py-4 py-xl-5">
        <div className="row mb-5">
            <div className="col-md-8 col-xl-6 text-center mx-auto">
                <h2>Our awards...</h2>
                <p>Below is a list of awards Lemaca has won over the years</p>
                <ul>
                    <li><HashLink to="#2018awards" smooth>2018 Awards</HashLink></li>
                    <li><HashLink to="#2020awards" smooth>2020 Awards</HashLink></li>
                    <li><HashLink to="#2021awards" smooth>2021 Awards</HashLink></li>
                    <li><HashLink to="#2022awards" smooth>2022 Awards</HashLink></li>
                    <li><HashLink to="#2023awards" smooth>2023 Awards</HashLink></li>
                </ul>
            </div>
        </div>
        
        <h1 id="2018awards" className='text-center'>2018</h1><hr style={{color: 'blue'}}></hr>
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
                </tbody>
            </table>
        </div>
        
        <h1 id="2020awards" className='text-center'>2020</h1><hr style={{color: 'blue'}}></hr>
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
                        <td>Greenwood Maceyx</td>
                        <td>2nd</td>
                        <td>Huacaya Senior Female - Black</td>
                        <td>2020</td>
                        <td>Berwick Fleece Show</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <h1 id="2021awards" className='text-center'>2021</h1><hr style={{color: 'blue'}}></hr>
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
                        <td>Greenwood Maceyx</td>
                        <td>2nd</td>
                        <td>Huacaya Mature Female - Black</td>
                        <td>2021</td>
                        <td>Red Hill VER Celebration Fleece Show</td>
                    </tr>
                    <tr>
                        <td>Greenwood Maceyx</td>
                        <td>3rd</td>
                        <td>Huacaya Mature Female - Black</td>
                        <td>2021</td>
                        <td>Royal Hobart Fleece Show</td>
                    </tr>
                    <tr>
                        <td>Lemaca Wynter Delight</td>
                        <td>1st</td>
                        <td>Huacaya Junior Female - Black</td>
                        <td>2021</td>
                        <td>Red Hill VER Celebration Fleece Show</td>
                    </tr>
                    <tr>
                        <td>Lemaca Wynter Delight</td>
                        <td>3rd</td>
                        <td>Huacaya Junior Female - Black</td>
                        <td>2021</td>
                        <td>Royal Hobart Fleece Show</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <h1 id="2022awards" className='text-center'>2022</h1><hr style={{color: 'blue'}}></hr>
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
                        <td>3rd</td>
                        <td>Huacaya Senior Male - Black</td>
                        <td>2022</td>
                        <td>Kyneton Fleece Show</td>
                    </tr>
                    <tr>
                        <td>Lemaca Koko Delight</td>
                        <td>3rd</td>
                        <td>Huacaya Junior Female - Brown</td>
                        <td>2022</td>
                        <td>Seymour Halter Show</td>
                    </tr>
                    <tr>
                        <td>Greenwood Maceyx</td>
                        <td>3rd</td>
                        <td>Huacaya Senior Female - Black</td>
                        <td>2022</td>
                        <td>Royal Bathurst Fleece Show</td>
                    </tr>
                    <tr>
                        <td>Greenwood Maceyx</td>
                        <td>2nd</td>
                        <td>Huacaya Senior Female - Black</td>
                        <td>2022</td>
                        <td>Red Hill VER Celebration Fleece Show</td>
                    </tr>
                    <tr>
                        <td>Greenwood Maceyx</td>
                        <td>3rd</td>
                        <td>Huacaya Senior Female - Black</td>
                        <td>2022</td>
                        <td>Bendigo Victoria Colourbration Fleece Show</td>
                    </tr>
                    <tr>
                        <td>Greenwood Maceyx</td>
                        <td>2nd</td>
                        <td>Huacaya Senior Female - Black</td>
                        <td>2022</td>
                        <td>Royal Melbourne Fleece Show</td>
                    </tr>
                    <tr>
                        <td>Greenwood Maceyx</td>
                        <td>3rd</td>
                        <td>Huacaya Senior Female - Black</td>
                        <td>2022</td>
                        <td>Seymour Fleece Show</td>
                    </tr>
                    <tr>
                        <td>Greenwood Maceyx</td>
                        <td>2nd</td>
                        <td>Huacaya Senior Female - Black</td>
                        <td>2022</td>
                        <td>Kyneton Fleece Show</td>
                    </tr>
                    <tr>
                        <td>Lemaca Wynter Delight</td>
                        <td>2nd</td>
                        <td>Huacaya Senior Female - Black</td>
                        <td>2022</td>
                        <td>Royal Bathurst Fleece Show</td>
                    </tr>
                    <tr>
                        <td>Lemaca Wynter Delight</td>
                        <td>1st</td>
                        <td>Huacaya Female (Intermediate) - Black</td>
                        <td>2022</td>
                        <td>Hawkesbury Fleece Show</td>
                    </tr>
                    <tr>
                        <td>Lemaca Wynter Delight</td>
                        <td>1st</td>
                        <td>Huacaya Female (Intermediate) - Black</td>
                        <td>2022</td>
                        <td>Red Hill VER Celebration Fleece Show</td>
                    </tr>
                    <tr>
                        <td>Lemaca Wynter Delight</td>
                        <td>2nd</td>
                        <td>Huacaya Female (Intermediate) - Black</td>
                        <td>2022</td>
                        <td>Bendigo Victoria Colourbration Fleece Show</td>
                    </tr>
                    <tr>
                        <td>Lemaca Wynter Delight</td>
                        <td>1st</td>
                        <td>Huacaya Female (Intermediate) - Black</td>
                        <td>2022</td>
                        <td>Royal Melbourne Fleece Show</td>
                    </tr>
                    <tr>
                        <td>Lemaca Wynter Delight</td>
                        <td>3rd</td>
                        <td>Huacaya Female (Intermediate) - Black</td>
                        <td>2022</td>
                        <td>Seymour Halter Show</td>
                    </tr>
                    <tr>
                        <td>Lemaca Wynter Delight</td>
                        <td>1st</td>
                        <td>Huacaya Female (Intermediate) - Black</td>
                        <td>2022</td>
                        <td>Seymour Fleece Show</td>
                    </tr>
                    <tr>
                        <td>Lemaca Wynter Delight</td>
                        <td>1st</td>
                        <td>Huacaya Female (Intermediate) - Black</td>
                        <td>2022</td>
                        <td>Kyneton Fleece Show</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <h1 id="2023awards" className='text-center'>2023</h1><hr style={{color: 'blue'}}></hr>
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
                        <td>Lemaca Koko Delight</td>
                        <td>2nd</td>
                        <td>Huacaya Junior - Brown</td>
                        <td>2023</td>
                        <td>Berwick Fleece Show</td>
                    </tr>
                    <tr>
                        <td>Greenwood Maceyx</td>
                        <td>2nd</td>
                        <td>Huacaya Senior Female - Black</td>
                        <td>2023</td>
                        <td>Berwick Fleece Show</td>
                    </tr>
                    <tr>
                        <td>Greenwood Maceyx</td>
                        <td>2nd</td>
                        <td>Huacaya Adult Female - Black</td>
                        <td>2023</td>
                        <td>Bendigo Victoria Colourbration Fleece Show</td>
                    </tr>
                    <tr>
                        <td>Lemaca Wynter Delight</td>
                        <td>2nd</td>
                        <td>Huacaya Adult Female - Roan</td>
                        <td>2023</td>
                        <td>Berwick Fleece Show</td>
                    </tr>
                    <tr>
                        <td>Lemaca Wynter Delight</td>
                        <td>2nd</td>
                        <td>Huacaya Adult Female - Roan</td>
                        <td>2023</td>
                        <td>Berwick Halter Show</td>
                    </tr>
                    <tr>
                        <td>Lemaca Wynter Delight</td>
                        <td>3rd</td>
                        <td>Huacaya Adult Female - Roan</td>
                        <td>2023</td>
                        <td>Bendigo Victoria Colourbration Fleece Show</td>
                    </tr>
                    <tr>
                        <td>Lemaca Wynter Delight</td>
                        <td>2nd</td>
                        <td>Huacaya Adult Female - Roan</td>
                        <td>2023</td>
                        <td>Ballarat Sheep + Alpaca Fleece Show</td>
                    </tr>
                    <tr>
                        <td>Lemaca Koko Delight</td>
                        <td>2nd</td>
                        <td>Huacaya Junior Female - Black</td>
                        <td>2023</td>
                        <td>Ballarat Sheep + Alpaca Halter Show</td>
                    </tr>
                    <tr>
                        <td>Greenwood Maceyx</td>
                        <td>2nd</td>
                        <td>Huacaya Senior Female - Black</td>
                        <td>2023</td>
                        <td>Ballarat Sheep + Alpaca Fleece Show</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
  );
};
  
export default Awards;