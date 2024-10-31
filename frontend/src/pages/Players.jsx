// src/components/Players.js
import React, { useState, useEffect } from 'react';
import { getPlayers } from '../api/player';

export default function Players() {
  const [players, setPlayers] = useState([]);
  const [loading, setLoading] = useState(true); // State for loading status
  const [error, setError] = useState(null); // State for error handling

  useEffect(() => {
    const fetchPlayers = async () => {
      try {
        const response = await getPlayers();
        setPlayers(response); // Set players with the response data
      } catch (err) {
        setError(err.message); // Handle any errors
      } finally {
        setLoading(false); // Stop loading when done
      }
    };

    fetchPlayers(); // Call the fetch function
  }, []); // Empty dependency array means this runs once on mount

  if (loading) {
    return <div>Loading players...</div>; // Loading state
  }

  if (error) {
    return <div>Error: {error}</div>; // Error handling
  }

  return (
    <div>
      <h1>Players List</h1>
      <ul>
        {players.map((player) => (
          <li key={player.user_id}>
            {player.username} - {player.gender}, {player.nationality}, Age: {player.age}
          </li>
        ))}
      </ul>
    </div>
  );
}
