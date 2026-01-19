import axios from "axios";

// Base URL of your Django backend
const API = axios.create({
  baseURL: "http://127.0.0.1:8000/api/",
});

export const getTestData = async () => {
  try {
    const response = await API.get("test/");
    return response.data;
  } catch (error) {
    console.error("Error fetching test data:", error);
    return null;
  }
};
