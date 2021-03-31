import axios from "axios";
export default axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    Authorization: "Client-ID te0AfhVFgIwZ68KEDnKOWAkTNbtmmd-aqtS2xORs9Co",
  },
});
