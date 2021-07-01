import { pipe, tap } from "wonka";

export const errorExchange = ({ onError }) => {
  const errors = {
    graphqlErrors: [],
    networkError: null
  };

  const error = ({ client, forward }) => ops$ => {
    return pipe(
      forward(ops$),
      tap(({ error }) => {
        if (error) {
          if (onError) {
            onError({
              graphQLErrors: error.graphQLErrors,
              networkError: error.networkError
            });
          }
          errors.graphqlErrors = [...error.graphQLErrors];
          errors.networkError = error.networkError;
        }
      })
    );
  };

  error.extractGraphqlErrors = () => errors.graphqlErrors;
  error.extractNetworkError = () => errors.networkError;

  return error;
};

export default errorExchange;
