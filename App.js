
import React, { useState } from 'react';
import './App.css';

const DefaultAd = () => {
  const defaultData = [
    { id: 1, sno: '1', name: 'infosys', email: "rajputaniket092@gmail.com", date: "02-12-2023" },
    { id: 2, sno: '2', name: 'connecting point tech', email: "rajputaniket8283@gmail.com", date: "02-12-2022" }
  ];

  const [searchQuery, setSearchQuery] = useState('');

  // Function to handle input change
  const handleInputChange = (event) => {
    setSearchQuery(event.target.value.toLowerCase());
  };

  // Function to filter data based on search query
  const filteredData = defaultData.filter(item =>
    item.name.toLowerCase().includes(searchQuery)
  );

  return (
    <div className='d1'>
      <div className='d2'>
        <button className='b1'>Add new company</button>
      </div>
      <div className='d3'>
        <input
          type="text"
          value={searchQuery}
          onChange={handleInputChange}
          placeholder="Search..."
        />
        <div className='d4'>
          {searchQuery && filteredData.length > 0 ? (
            // Display filtered data when there is a search query and matches found
            <table border={10}>
              <thead>
                <tr>
                  <th>Company list</th>
                </tr>
              </thead>
              <tbody>
                {filteredData.map(item => (
                  <tr key={item.id}>
                    <td>{item.sno}</td>
                    <td><button>select</button></td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            // Show empty state when no search query or no matches found
            <p></p>
          )}
        </div>
      </div>
    </div>
  );
};

export default DefaultAd;
