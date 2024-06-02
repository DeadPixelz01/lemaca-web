import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import alpaca_1 from "./img/Lemaca_7.jpeg";
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const StudService = () => {
  const [awardsData, setAwardsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log('API URL:', process.env.REACT_APP_API_URL);  // Debugging line
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/awards/greengullyamigo`);
        setAwardsData(response.data);
        console.log('Response data:', response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

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
              <p className="card-text"><strong>Colour: </strong>Solid True Black</p>
              <p className="card-text"><strong>Sex: </strong>Certified Male</p>
              <p className="card-text"><strong>DNA Certification: </strong>221309</p>
              <p className="card-text"><strong>Sire: </strong>Jolimont Essien</p>
              <p className="card-text"><strong>Dam: </strong>Green Gully Anoushka</p>
              <p className="card-text"><strong>Type: </strong>Huacaya</p>
              <h4 id="2018awards" className='text-center'>Show results</h4>
              <hr style={{ color: 'blue' }}></hr>
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
                    {awardsData.map((row, index) => (
                      <tr key={index}>
                        <td>{row.alpaca_name}</td>
                        <td>{row.place}</td>
                        <td>{row.competition}</td>
                        <td>{row.year}</td>
                        <td>{row.show_name}</td>
                      </tr>
                    ))}
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
