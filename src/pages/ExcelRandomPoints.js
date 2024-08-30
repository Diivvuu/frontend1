import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function ExcelRandomPoints() {
  const navigate = useNavigate();
  const [rows, setRows] = useState(10);
  const [columns, setColumns] = useState(5);
  const [valueRange, setValueRange] = useState([1, 100]);
  const [points, setPoints] = useState([]);

  const handleGeneratePoints = async () => {
    try {
      const response = await fetch(
        'http://100022.pythonanywhere.com/v2/excelrp/YOUR-API-KEY/',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ rows, columns, valueRange }),
        }
      );

      const data = await response.json();
      setPoints(data.excelData);
    } catch (error) {
      console.error('Error generating points:', error);
    }
  };

  return (
    <div className="flex flex-col items-center w-full min-h-screen bg-gradient-to-br from-blue-100 to-blue-300 p-8">
      <button
        onClick={() => navigate('/')}
        className="self-start mb-4 bg-gray-700 text-white px-4 py-2 rounded-md hover:bg-gray-800 transition-all duration-300"
      >
        Back
      </button>
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        Excel Random Points
      </h1>

      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg">
        <div className="mb-4">
          <label
            className="block text-gray-700 font-medium mb-2"
            htmlFor="rows"
          >
            Number of Rows
          </label>
          <input
            type="number"
            id="rows"
            value={rows}
            onChange={(e) => setRows(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 font-medium mb-2"
            htmlFor="columns"
          >
            Number of Columns
          </label>
          <input
            type="number"
            id="columns"
            value={columns}
            onChange={(e) => setColumns(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 font-medium mb-2"
            htmlFor="valueRange"
          >
            Value Range
          </label>
          <input
            type="text"
            id="valueRange"
            value={valueRange.join(' - ')}
            onChange={(e) =>
              setValueRange(e.target.value.split(' - ').map(Number))
            }
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
          />
        </div>

        <button
          onClick={handleGeneratePoints}
          className="w-full bg-blue-500 text-white font-medium py-2 rounded-md hover:bg-blue-600 transition-all duration-300"
        >
          Generate Points
        </button>
      </div>

      <div className="mt-8 w-full max-w-xl">
        <h2 className="text-xl font-bold text-gray-800 mb-4">
          Generated Points:
        </h2>
        <ul className="bg-white p-4 rounded-lg shadow-lg">
          {points.length > 0 ? (
            points.map((row, rowIndex) => (
              <li key={rowIndex} className="text-gray-700">
                Row {rowIndex + 1}:{' '}
                {row.map((val, colIndex) => (
                  <span key={colIndex} className="mr-2">
                    ({val.toFixed(2)})
                  </span>
                ))}
              </li>
            ))
          ) : (
            <p className="text-gray-600">
              No points generated yet. Click "Generate Points" to start.
            </p>
          )}
        </ul>
      </div>
    </div>
  );
}

export default ExcelRandomPoints;
