import axios from "axios";

const instance = axios.create({
  baseURL: "...", // The API (cloud function) URL
  // baseURL: "https://localhost:5001/challenge-4b2b2/us-central1/api",
});

export default instance;
