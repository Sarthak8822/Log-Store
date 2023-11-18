import React, { useState } from 'react';
import axios from 'axios';

export default function LogSearch() {
  const [filterType, setFilterType] = useState('');
  const [filterValue, setFilterValue] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [logs, setLogs] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.post('http://localhost:3000/search', {
        filterType,
        filterValue,
        startDate,
        endDate,
      });

      setLogs(response.data);
    } catch (error) {
      console.error('Error searching logs:', error);
    }
  };

  const highlightSearchText = (text, searchText) => {
    const regex = new RegExp(searchText, 'gi');
    return text.replace(regex, (match) => `<span class="text-yellow-500 font-bold">${match}</span>`);
  };

  return (
    <div className="container mx-auto mt-8 p-8 border rounded shadow">
      <h1 className="text-3xl font-bold mb-4">Log Search</h1>
      <div className="flex mb-4">
        <label className="mr-4">
          Filter Type:
          <select
            className="text-black ml-2 p-2 border rounded"
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
          >
            <option value="">Select Filter</option>
            <option value="level">Level</option>
            <option value="message">Message</option>
            <option value="resourceId">Resource ID</option>
            <option value="traceId">Trace ID</option>
            <option value="spanId">Span ID</option>
            <option value="commit">Commit</option>
            <option value="metadata.parentResourceId">Parent Resource ID</option>
          </select>
        </label>
        <label className="mr-4">
          Filter Value:
          <input
            type="text"
            className="text-black ml-2 p-2 border rounded"
            value={filterValue}
            onChange={(e) => setFilterValue(e.target.value)}
          />
        </label>
        <label className="mr-4">
          Start Date:
          <input
            type="date"
            className="text-black ml-2 p-2 border rounded"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </label>
        <label className="mr-4">
          End Date:
          <input
            type="date"
            className="text-black ml-2 p-2 border rounded"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </label>
        <button
          className="bg-blue-500 text-white p-2 rounded"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
      <div>
        <h2 className="text-xl font-bold mb-2">Search Results:</h2>
        <ul>
          {logs.map((log, index) => (
            <li
              key={index}
              className="mb-2 p-2 border rounded"
              dangerouslySetInnerHTML={{ __html: highlightSearchText(JSON.stringify(log), filterValue) }}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};
