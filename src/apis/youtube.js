import axios from "axios";
const KEY = "AIzaSyCe_ipJL5VRvIB2vuLfOSc6UOJ1gnmFIec";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
