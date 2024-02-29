import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { HashLink } from 'react-router-hash-link';
import React, { useEffect, useState } from "react";

const Awards = () => {

    const [sortConfig, setSortConfig] = useState(null);

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


    const data2018 = [
        { 'Alpaca (Name)': 'Green Gully Amigo', 'Place': '2nd', 'Competition': 'Huacaya Adult Male - Black', 'Year': '2018', 'Show': 'Murwillumbah Alpaca Halter Show' },
        { 'Alpaca (Name)': 'Green Gully Amigo', 'Place': '2nd', 'Competition': 'Huacaya Adult Male - Black', 'Year': '2018', 'Show': 'Charles Ledgar Alpaca Halter Show' },
        { 'Alpaca (Name)': 'Green Gully Amigo', 'Place': '1st', 'Competition': 'Huacaya Adult Male - Black', 'Year': '2018', 'Show': 'Grafton Colourbration Halter Show' },
        { 'Alpaca (Name)': 'Green Gully Amigo', 'Place': '1st', 'Competition': 'Huacaya Adult Male (Intermediate) - Black', 'Year': '2018', 'Show': 'Grafton Colourbration Fleece Show' },
        { 'Alpaca (Name)': 'Green Gully Amigo', 'Place': '1st', 'Competition': 'Huacaya Adult Male - Black', 'Year': '2018', 'Show': 'Glen Innes New England Fleece Show' },
        { 'Alpaca (Name)': 'Green Gully Amigo', 'Place': '2nd', 'Competition': 'Huacaya Adult Male (Intermediate) - Black', 'Year': '2018', 'Show': 'Glen Innes New England Halter Show' },
        { 'Alpaca (Name)': 'Green Gully Amigo', 'Place': '1st', 'Competition': 'Huacaya Adult Male (Intermediate) - Black', 'Year': '2018', 'Show': 'Maleny Fleece Show' }
    ];
    
    const data2021 = [
        { 'Alpaca (Name)': 'Greenwood Maceyx', 'Place': '2nd', 'Competition': 'Huacaya Mature Female - Black', 'Year': '2021', 'Show': 'Red Hill VER Celebration Fleece Show' },
        { 'Alpaca (Name)': 'Greenwood Maceyx', 'Place': '3rd', 'Competition': 'Huacaya Mature Female - Black', 'Year': '2021', 'Show': 'Royal Hobart Fleece Show' },
        { 'Alpaca (Name)': 'Lemaca Wynter Delight', 'Place': '1st', 'Competition': 'Huacaya Junior Female - Black', 'Year': '2021', 'Show': 'Red Hill VER Celebration Fleece Show' },
        { 'Alpaca (Name)': 'Lemaca Wynter Delight', 'Place': '3rd', 'Competition': 'Huacaya Junior Female - Black', 'Year': '2021', 'Show': 'Royal Hobart Fleece Show' }
    ];

    const data2022 = [
        { 'Alpaca (Name)': 'Green Gully Amigo', 'Place': '3rd', 'Competition': 'Huacaya Senior Male - Black', 'Year': '2022', 'Show': 'Kyneton Fleece Show' },
        { 'Alpaca (Name)': 'Lemaca Koko Delight', 'Place': '3rd', 'Competition': 'Huacaya Junior Female - Brown', 'Year': '2022', 'Show': 'Seymour Halter Show' },
        { 'Alpaca (Name)': 'Greenwood Maceyx', 'Place': '3rd', 'Competition': 'Huacaya Senior Female - Black', 'Year': '2022', 'Show': 'Royal Bathurst Fleece Show' },
        { 'Alpaca (Name)': 'Greenwood Maceyx', 'Place': '2nd', 'Competition': 'Huacaya Senior Female - Black', 'Year': '2022', 'Show': 'Red Hill VER Celebration Fleece Show' },
        { 'Alpaca (Name)': 'Greenwood Maceyx', 'Place': '3rd', 'Competition': 'Huacaya Senior Female - Black', 'Year': '2022', 'Show': 'Bendigo Victoria Colourbration Fleece Show' },
        { 'Alpaca (Name)': 'Greenwood Maceyx', 'Place': '2nd', 'Competition': 'Huacaya Senior Female - Black', 'Year': '2022', 'Show': 'Royal Melbourne Fleece Show' },
        { 'Alpaca (Name)': 'Greenwood Maceyx', 'Place': '3rd', 'Competition': 'Huacaya Senior Female - Black', 'Year': '2022', 'Show': 'Seymour Fleece Show' },
        { 'Alpaca (Name)': 'Greenwood Maceyx', 'Place': '2nd', 'Competition': 'Huacaya Senior Female - Black', 'Year': '2022', 'Show': 'Kyneton Fleece Show' },
        { 'Alpaca (Name)': 'Lemaca Wynter Delight', 'Place': '2nd', 'Competition': 'Huacaya Senior Female - Black', 'Year': '2022', 'Show': 'Royal Bathurst Fleece Show' },
        { 'Alpaca (Name)': 'Lemaca Wynter Delight', 'Place': '1st', 'Competition': 'Huacaya Female (Intermediate) - Black', 'Year': '2022', 'Show': 'Hawkesbury Fleece Show' },
        { 'Alpaca (Name)': 'Lemaca Wynter Delight', 'Place': '1st', 'Competition': 'Huacaya Female (Intermediate) - Black', 'Year': '2022', 'Show': 'Red Hill VER Celebration Fleece Show' },
        { 'Alpaca (Name)': 'Lemaca Wynter Delight', 'Place': '2nd', 'Competition': 'Huacaya Female (Intermediate) - Black', 'Year': '2022', 'Show': 'Bendigo Victoria Colourbration Fleece Show' },
        { 'Alpaca (Name)': 'Lemaca Wynter Delight', 'Place': '1st', 'Competition': 'Huacaya Female (Intermediate) - Black', 'Year': '2022', 'Show': 'Royal Melbourne Fleece Show' },
        { 'Alpaca (Name)': 'Lemaca Wynter Delight', 'Place': '3rd', 'Competition': 'Huacaya Female (Intermediate) - Black', 'Year': '2022', 'Show': 'Seymour Halter Show' },
        { 'Alpaca (Name)': 'Lemaca Wynter Delight', 'Place': '1st', 'Competition': 'Huacaya Female (Intermediate) - Black', 'Year': '2022', 'Show': 'Seymour Fleece Show' },
        { 'Alpaca (Name)': 'Lemaca Wynter Delight', 'Place': '1st', 'Competition': 'Huacaya Female (Intermediate) - Black', 'Year': '2022', 'Show': 'Kyneton Fleece Show' }
    ];

    const data2023 = [
        { 'Alpaca (Name)': 'Lemaca Koko Delight', 'Place': '2nd', 'Competition': 'Huacaya Junior - Brown', 'Year': '2023', 'Show': 'Berwick Fleece Show' },
        { 'Alpaca (Name)': 'Greenwood Maceyx', 'Place': '2nd', 'Competition': 'Huacaya Senior Female - Black', 'Year': '2023', 'Show': 'Berwick Fleece Show' },
        { 'Alpaca (Name)': 'Greenwood Maceyx', 'Place': '2nd', 'Competition': 'Huacaya Adult Female - Black', 'Year': '2023', 'Show': 'Bendigo Victoria Colourbration Fleece Show' },
        { 'Alpaca (Name)': 'Lemaca Wynter Delight', 'Place': '2nd', 'Competition': 'Huacaya Adult Female - Roan', 'Year': '2023', 'Show': 'Berwick Fleece Show' },
        { 'Alpaca (Name)': 'Lemaca Wynter Delight', 'Place': '2nd', 'Competition': 'Huacaya Adult Female - Roan', 'Year': '2023', 'Show': 'Berwick Halter Show' },
        { 'Alpaca (Name)': 'Lemaca Wynter Delight', 'Place': '3rd', 'Competition': 'Huacaya Adult Female - Roan', 'Year': '2023', 'Show': 'Bendigo Victoria Colourbration Fleece Show' },
        { 'Alpaca (Name)': 'Lemaca Wynter Delight', 'Place': '2nd', 'Competition': 'Huacaya Adult Female - Roan', 'Year': '2023', 'Show': 'Ballarat Sheep + Alpaca Fleece Show' },
        { 'Alpaca (Name)': 'Lemaca Koko Delight', 'Place': '2nd', 'Competition': 'Huacaya Junior Female - Black', 'Year': '2023', 'Show': 'Ballarat Sheep + Alpaca Halter Show' },
        { 'Alpaca (Name)': 'Greenwood Maceyx', 'Place': '2nd', 'Competition': 'Huacaya Senior Female - Black', 'Year': '2023', 'Show': 'Ballarat Sheep + Alpaca Fleece Show' },
        { 'Alpaca (Name)': 'Lemaca Alpacas', 'Place': '4th', 'Competition': 'Alpaca Photo Competition', 'Year': '2023', 'Show': 'Bendigo Show' },
        { 'Alpaca (Name)': 'Greenwood Maceyx', 'Place': '2nd', 'Competition': 'Huacaya Senior Female - Black', 'Year': '2023', 'Show': 'Royal Melbourne Fleece Show' },
        { 'Alpaca (Name)': 'Lemaca Wynter Delight', 'Place': '2nd', 'Competition': 'Huacaya Adult Female - Roan', 'Year': '2023', 'Show': 'Royal Melbourne Fleece Show' },
        { 'Alpaca (Name)': 'Lemaca Koko Delight', 'Place': '2nd', 'Competition': 'Huacaya Junior Female - Black', 'Year': '2023', 'Show': 'Royal Melbourne Fleece Show' },
        { 'Alpaca (Name)': 'Lemaca Wynter Delight', 'Place': '1st', 'Competition': 'Huacaya Adult - Roan', 'Year': '2023', 'Show': 'Royal Launceston Fleece Show' },
        { 'Alpaca (Name)': 'Lemaca Wynter Delight', 'Place': '2nd', 'Competition': 'Huacaya Adult - Roan', 'Year': '2023', 'Show': 'Kyneton Fleece Show' },
        { 'Alpaca (Name)': 'Lemaca Koko Delight', 'Place': '1st', 'Competition': 'Huacaya Junior - Black', 'Year': '2023', 'Show': 'Kyneton Fleece Show' },
        { 'Alpaca (Name)': 'Greenwood Maceyx', 'Place': '2nd', 'Competition': 'Huacaya Senior - Black', 'Year': '2023', 'Show': 'Kyneton Fleece Show' }
    ];

    const data2024 = [
        { 'Alpaca (Name)': 'Lemaca Koko Delight', 'Place': '2nd', 'Competition': 'Huacaya Adult - Black', 'Year': '2024', 'Show': 'Berwick Fleece Show' },
        { 'Alpaca (Name)': 'Lemaca Wynter Delight', 'Place': '1st', 'Competition': 'Huacaya Senior - Roan', 'Year': '2024', 'Show': 'Berwick Fleece Show' },
        { 'Alpaca (Name)': 'Greenwood Maceyx', 'Place': '2nd', 'Competition': 'Huacaya Aged - Black', 'Year': '2024', 'Show': 'Berwick Fleece Show' }
    ];

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
                    <li><HashLink to="#2024awards" smooth>2024 Awards</HashLink></li>
                </ul>
            </div>
        </div>
        
            {/* 2018 Awards */}
            <h1 id="2018awards" className='text-center'>2018</h1>
            <hr style={{ color: 'blue' }}></hr>
            <div className="table-responsive text-center">
                <table className="table text-center">
                    <thead>
                        <tr>
                            <th onClick={() => sortTable('Alpaca (Name)')}>Alpaca (Name)</th>
                            <th onClick={() => sortTable('Place')}>Place</th>
                            <th onClick={() => sortTable('Competition')}>Competition</th>
                            <th onClick={() => sortTable('Year')}>Year</th>
                            <th onClick={() => sortTable('Show')}>Show</th>
                        </tr>
                    </thead>
                <tbody>
                {sortedData(data2018).map((row, index) => (
                            <tr key={index}>
                                <td>{row['Alpaca (Name)']}</td>
                                <td>{row['Place']}</td>
                                <td>{row['Competition']}</td>
                                <td>{row['Year']}</td>
                                <td>{row['Show']}</td>
                            </tr>
                        ))}
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
                            <th onClick={() => sortTable('Alpaca (Name)')}>Alpaca (Name)</th>
                            <th onClick={() => sortTable('Place')}>Place</th>
                            <th onClick={() => sortTable('Competition')}>Competition</th>
                            <th onClick={() => sortTable('Year')}>Year</th>
                            <th onClick={() => sortTable('Show')}>Show</th>
                        </tr>
                    </thead>
                <tbody>
                {sortedData(data2021).map((row, index) => (
                            <tr key={index}>
                                <td>{row['Alpaca (Name)']}</td>
                                <td>{row['Place']}</td>
                                <td>{row['Competition']}</td>
                                <td>{row['Year']}</td>
                                <td>{row['Show']}</td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </div>

        <h1 id="2022awards" className='text-center'>2022</h1><hr style={{color: 'blue'}}></hr>
        <div className="table-responsive text-center">
        <table className="table text-center">
                    <thead>
                        <tr>
                            <th onClick={() => sortTable('Alpaca (Name)')}>Alpaca (Name)</th>
                            <th onClick={() => sortTable('Place')}>Place</th>
                            <th onClick={() => sortTable('Competition')}>Competition</th>
                            <th onClick={() => sortTable('Year')}>Year</th>
                            <th onClick={() => sortTable('Show')}>Show</th>
                        </tr>
                    </thead>
                <tbody>
                {sortedData(data2022).map((row, index) => (
                            <tr key={index}>
                                <td>{row['Alpaca (Name)']}</td>
                                <td>{row['Place']}</td>
                                <td>{row['Competition']}</td>
                                <td>{row['Year']}</td>
                                <td>{row['Show']}</td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </div>
        <h1 id="2023awards" className='text-center'>2023</h1><hr style={{color: 'blue'}}></hr>
        <div className="table-responsive text-center">
        <table className="table text-center">
                    <thead>
                        <tr>
                            <th onClick={() => sortTable('Alpaca (Name)')}>Alpaca (Name)</th>
                            <th onClick={() => sortTable('Place')}>Place</th>
                            <th onClick={() => sortTable('Competition')}>Competition</th>
                            <th onClick={() => sortTable('Year')}>Year</th>
                            <th onClick={() => sortTable('Show')}>Show</th>
                        </tr>
                    </thead>
                <tbody>
                {sortedData(data2023).map((row, index) => (
                            <tr key={index}>
                                <td>{row['Alpaca (Name)']}</td>
                                <td>{row['Place']}</td>
                                <td>{row['Competition']}</td>
                                <td>{row['Year']}</td>
                                <td>{row['Show']}</td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </div>
        <h1 id="2024awards" className='text-center'>2024</h1><hr style={{color: 'blue'}}></hr>
        <div className="table-responsive text-center">
        <table className="table text-center">
                    <thead>
                        <tr>
                            <th onClick={() => sortTable('Alpaca (Name)')}>Alpaca (Name)</th>
                            <th onClick={() => sortTable('Place')}>Place</th>
                            <th onClick={() => sortTable('Competition')}>Competition</th>
                            <th onClick={() => sortTable('Year')}>Year</th>
                            <th onClick={() => sortTable('Show')}>Show</th>
                        </tr>
                    </thead>
                <tbody>
                {sortedData(data2024).map((row, index) => (
                            <tr key={index}>
                                <td>{row['Alpaca (Name)']}</td>
                                <td>{row['Place']}</td>
                                <td>{row['Competition']}</td>
                                <td>{row['Year']}</td>
                                <td>{row['Show']}</td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </div>
    </div>
  );
};
  
export default Awards;