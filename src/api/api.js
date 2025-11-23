// src/api/api.js
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:1337/api",
  timeout: 8000,
  headers: {
    "Authorization": "Bearer b48a58cbe6868eff6e178f3e2213e890d92c3c7781ee4eea5ddd35f35e97042810916bf5c65e256bcc43f8da9728bd3e4028be9c4885bccb002e9fb27cc3d81d9cbbb6aad7b867179e7550ef28107ef77c78b3cec88076ab01dd8f90373f631c10f0905939f311c775c4c10bcb1720a5af2fef6cb0d32b160cb635148675ea8e"
  }
});


api.interceptors.response.use(
  res => res,
  err => Promise.reject(err)
);

export default api;
