import axios from "axios";

const mediumURL =
  "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@oyemayanq";

export default axios.create({
  baseURL: mediumURL,
});
