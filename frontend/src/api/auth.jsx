import axios from 'axios';

/**
 * Function to login a user.
 * @param {string} username - The username of the user.
 * @param {string} password - The password of the user.
 * @returns {Promise<Object>} - Returns the user data on successful login.
 * @throws Will throw an error if login fails.
 */
export const loginUser = async (username, password) => {
  try {
    const response = await axios.post('http://localhost:3001/api/login', { username, password });

    // Check if the response is successful
    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error('Login failed');
    }
  } catch (error) {
    // Provide a more user-friendly error message
    const errorMessage = error.response ? error.response.data.message : 'Unable to login. Please try again.';
    throw new Error(errorMessage);
  }
};

/**
 * Function to register a new user.
 * @param {Object} userData - The user data object containing username, password, etc.
 * @returns {Promise<Object>} - Returns a success message on successful registration.
 * @throws Will throw an error if registration fails.
 */
export const registerUser = async (userData) => {
  try {
    const response = await axios.post('http://localhost:3001/api/register', userData);

    // Check if the response is successful
    if (response.status === 201) {
      return response.data;
    } else {
      throw new Error('Registration failed');
    }
  } catch (error) {
    // Provide a more user-friendly error message
    const errorMessage = error.response ? error.response.data.message : 'Unable to register. Please try again.';
    throw new Error(errorMessage);
  }
};
