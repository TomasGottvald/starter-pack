import {
    Client,
    dedupExchange,
    cacheExchange,
    fetchExchange,
    ssrExchange
  } from "urql";
  import errorExchange from "./error";
  import CONFIG from "../../config/global";

  let urqlClient = null;
  
  function create(initialState) {
    const ssrCache = ssrExchange({
      initialState
    });
    const errorHandler = errorExchange({
      onError: ({ graphQLErrors, networkError }) => {
        if (typeof window === "undefined") {
          console.log(`onClientError`, graphQLErrors, networkError);
        }
      }
    });
  
    return {
      client: new Client({
        url: CONFIG.API_URL,
        suspense: !process.browser,
        exchanges: [
          dedupExchange,
          cacheExchange,
          // Put the exchange returned by calling ssrExchange after your cacheExchange,
          // but before any asynchronous exchanges like the fetchExchange:
          ssrCache,
          errorHandler,
          fetchExchange
        ]
      }),
      ssrCache,
      errorHandler
    };
  }
  
  export default function initUrql(initialState = {}) {
    if (!process.browser) {
      return create(initialState);
    }
  
    if (!urqlClient) {
      urqlClient = create(initialState);
    }
  
    return urqlClient;
  }
  