import React from 'react';
import './App.css';

function App(): React.ReactElement {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">
          Welcome to React + TypeScript + Tailwind
        </h1>
        <p className="text-xl text-gray-700 mb-8">
          Edit <code className="bg-gray-200 px-2 py-1 rounded">src/App.tsx</code> and save to reload.
        </p>
        <a
          className="inline-block bg-indigo-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors duration-200"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </div>
    </div>
  );
}

export default App;