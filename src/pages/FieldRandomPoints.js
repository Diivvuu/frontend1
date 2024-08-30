import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function FieldRandomPoints() {
  const navigate = useNavigate();
  const [side, setSide] = useState(100);
  const [selection, setSelection] = useState(5);
  const [choice, setChoice] = useState(0);
  const [value, setValue] = useState(10);
  const [points, setPoints] = useState([]);

  const handleGeneratePoints = async () => {
    try {
      const response = await fetch(
        'http://100022.pythonanywhere.com/v2/fieldrp/YOUR-API-KEY/',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ side, selection, choice, value }),
        }
      );

      const data = await response.json();
      setPoints(data.listOfPoints);
    } catch (error) {
      console.error('Error generating points:', error);
    }
  };

  return (
    <div className="flex flex-col items-center w-full min-h-screen bg-gradient-to-br from-green-100 to-green-300 p-8">
      <button
        onClick={() => navigate('/')}
        className="self-start mb-4 bg-gray-700 text-white px-4 py-2 rounded-md hover:bg-gray-800 transition-all duration-300"
      >
        Back
      </button>
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        Field Random Points
      </h1>

      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg">
        <div className="mb-4">
          <label
            className="block text-gray-700 font-medium mb-2"
            htmlFor="side"
          >
            Side Length
          </label>
          <input
            type="number"
            id="side"
            value={side}
            onChange={(e) => setSide(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-teal-200"
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 font-medium mb-2"
            htmlFor="selection"
          >
            Selection
          </label>
          <input
            type="number"
            id="selection"
            value={selection}
            onChange={(e) => setSelection(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-teal-200"
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 font-medium mb-2"
            htmlFor="choice"
          >
            Choice
          </label>
          <input
            type="number"
            id="choice"
            value={choice}
            onChange={(e) => setChoice(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-teal-200"
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 font-medium mb-2"
            htmlFor="value"
          >
            Value
          </label>
          <input
            type="number"
            id="value"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-teal-200"
          />
        </div>

        <button
          onClick={handleGeneratePoints}
          className="w-full bg-teal-500 text-white font-medium py-2 rounded-md hover:bg-teal-600 transition-all duration-300"
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
            points.map((point, index) => (
              <li key={index} className="text-gray-700">
                Point {index + 1}: ({point[0].toFixed(2)}, {point[1].toFixed(2)}
                )
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

export default FieldRandomPoints;
