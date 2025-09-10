import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://diamond-company.api.dharmatech.in/api/v1", // change if different
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer YOUR_TOKEN_HERE`, // replace with your token logic
  },
});

export default axiosInstance;
