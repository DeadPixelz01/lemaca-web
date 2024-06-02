import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { HashLink } from 'react-router-hash-link';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Awards = () => {
  const [awardsData, setAwardsData] = useState([]);
  const [sortConfig, setSortConfig] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/awards`);
        setAwardsData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const sortTable = (column) => {
    let direction = 'ascending';
    if (sortConfig && sortConfig.column === column && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ column, direction });
  };

  const sortedData = (data) => {
    let sortedRows = [...data];
    if (sortConfig !== null) {
      sortedRows.sort((a, b) => {
        if (a[sortConfig.column] < b[sortConfig.column]) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (a[sortConfig.column] > b[sortConfig.column]) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }
    return sortedRows;
  };

  return (
    <div className="container py-4 py-xl-5">
      <div className="row mb-5">
        <div className="col-md-8 col-xl-6 text-center mx-auto">
          <h2>Our awards...</h2>
          <p>Below is a list of awards Lemaca has won over the years</p>
          <ul>
            <li><HashLink to="#awards" smooth>Awards</HashLink></li>
          </ul>
        </div>
      </div>
      <h1 id="awards" className='text-center'>Awards</h1>
      <hr style={{ color: 'blue' }}></hr>
      <div className="table-responsive text-center">
        <table className="table text-center">
          <thead>
            <tr>
              <th onClick={() => sortTable('alpaca_name')}>Alpaca (Name)</th>
              <th onClick={() => sortTable('place')}>Place</th>
              <th onClick={() => sortTable('competition')}>Competition</th>
              <th onClick={() => sortTable('year')}>Year</th>
              <th onClick={() => sortTable('show_name')}>Show</th>
            </tr>
          </thead>
          <tbody>
            {sortedData(awardsData).map((row, index) => (
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
  );
};

export default Awards;
