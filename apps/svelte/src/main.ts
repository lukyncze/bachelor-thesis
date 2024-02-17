import axios from 'axios';
import axiosRetry, {exponentialDelay, isNetworkError, isRetryableError} from 'axios-retry';
import App from "./App.svelte";
import "./app.css";

axiosRetry(axios, {
  retries: 3,
  retryDelay: (...arg) => exponentialDelay(...arg, 500),
  retryCondition(error) {
    return isNetworkError(error) || isRetryableError(error);
  },
});

const app = new App({
  target: document.getElementById("app"),
});

export default app;
