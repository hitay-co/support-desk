import axios from 'axios';

const API_URL = '/api/users/';

// Register User
const registerUser = async (userData) => {
  const response = await axios.post(API_URL, userData);
  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data));
  }
  return response.data;
};

const authService = {
  registerUser,
};

export default authService;
