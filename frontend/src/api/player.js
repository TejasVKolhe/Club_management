import axios from 'axios';

export const getPlayers = async () => {
  try {
    const response = await axios.get('http://localhost:3000/api/players');
    return response.data; // Ensure this returns the player data array
  } catch (error) {
    throw error.response ? error.response.data : { message: 'Failed to fetch players' };
  }
};
