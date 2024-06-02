import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { HashLink } from 'react-router-hash-link';
import React, { useEffect, useState } from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
  } from 'chart.js';
  import { Bar, Pie } from 'react-chartjs-2';
import axios from 'axios';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ArcElement
  );

const Awards = () => {
  const [awardsData, setAwardsData] = useState([]);
  const [sortConfig, setSortConfig] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log('API URL:', process.env.REACT_APP_API_URL);  // Debugging line
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/awards`);
        console.log('Response data:', response.data);  // Debugging line
        setAwardsData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  // process data to count awards per year
  const awardsCountByYear = awardsData.reduce((acc, award) => {
    acc[award.year] = (acc[award.year] || 0) + 1;
    return acc;
  }, {});

  // process data to count 1st place wins for each alpaca
  const firstPlaceWins = awardsData.filter(award => award.place === '1st').reduce((acc, award) => {
    acc[award.alpaca_name] = (acc[award.alpaca_name] || 0) + 1;
    return acc;
  }, {});

  const chartData = {
    labels: Object.keys(awardsCountByYear),
    datasets: [
      {
        label: 'Awards Count',
        data: Object.values(awardsCountByYear),
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
    ],
  };

  const pieData = {
    labels: Object.keys(firstPlaceWins),
    datasets: [
      {
        label: '1st Place Wins',
        data: Object.values(firstPlaceWins),
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
          'rgba(153, 102, 255, 0.6)',
          'rgba(255, 159, 64, 0.6)',
        ],
      },
    ],
  };

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
      <div className="row">
                <div className="col-md-6">
                  <div className="chart">
                    <Bar data={chartData} />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="chart" style={{ height: '300px' }}>
                    <Pie data={pieData} />
                  </div>
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
