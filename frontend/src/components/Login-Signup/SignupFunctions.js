// frontend/src/components/Login-Signup/signupFunction.js
import axios from 'axios';

export function registerUser(newUserDetails) {
  const apiUrl = 'http://localhost:8080/register';
  return axios.post(apiUrl, newUserDetails, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
