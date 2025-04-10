import React, { useState, useEffect } from "react";

const OptionChain = () => {
  const [data, setData] = useState(null);
  const [lastUpdated, setLastUpdated] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchOptionChain = async () => {
    try {
      setLoading(true);
      const response = await fetch("http://localhost:5000/api/nse-option-chain"); // Fetch from backend

      if (!response.ok) {
        throw new Error(`Failed to fetch data: ${response.status}`);
      }

      const jsonData = await response.json();

      // Only update state if data has changed
      if (JSON.stringify(jsonData) !== JSON.stringify(data)) {
        setData(jsonData);
        setLastUpdated(new Date().toLocaleTimeString());
      }

      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOptionChain(); // Initial fetch

    // Auto-update every 3 minutes (180000 ms)
    const interval = setInterval(fetchOptionChain, 180000);

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [data]); // Depend on 'data' to trigger re-fetch only when it updates

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">NSE Option Chain Data</h2>
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">Error: {error}</p>}
      {data && (
        <div>
          <p className="text-sm text-gray-500">Last Updated: {lastUpdated}</p>
          <pre className="bg-gray-100 p-2 rounded-lg text-sm overflow-auto">
            {JSON.stringify(data, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
};

export default OptionChain;
