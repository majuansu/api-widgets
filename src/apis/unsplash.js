import axios from "axios";
const KEY = "qq5i3dMKi_SCIg4c5IQxiL9lpcxoMbNosuA0ZV8tnAE";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: `Client-ID ${KEY}`,
  },
});
