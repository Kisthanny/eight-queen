import axios from "axios";

const instance = axios.create();

instance.interceptors.request.use(function (config) {
  const rawUrl = config.url;
  const connector = rawUrl[0] === "/" ? "" : "/";
  config.url = `${process.env.VUE_APP_REQUEST_PREFIX}${connector}${rawUrl}`;
  return config;
});

export default instance;