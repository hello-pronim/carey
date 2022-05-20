import { useMemo } from "react";
import {
  ApolloClient,
  ApolloLink,
  DocumentNode,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";
import merge from "deepmerge";
import { ErrorLink } from "@apollo/client/link/error";
import { RetryLink } from "@apollo/client/link/retry";

let apolloClient: any;

function createApolloClient() {
  if (!process.env.NEXT_PUBLIC_API_URL) {
    throw new Error("NEXT_PUBLIC_API_URL env value missing");
  }
  return new ApolloClient({
    ssrMode: typeof window === "undefined",
    link: ApolloLink.from([
      new RetryLink({
        delay: {
          initial: 500,
          max: 2000,
          jitter: true,
        },
        attempts: {
          max: 5,
          retryIf: (error, _operation) => !!error,
        },
      }),
      new ErrorLink(({ graphQLErrors, networkError, operation }) => {
        if (graphQLErrors) {
          graphQLErrors.forEach((gqlErr) => {
            const { message } = gqlErr;
            console.log(message, gqlErr, operation);
          });
        }
      }),
      new ApolloLink((operation, forward) => {
        // const traceArray = new Error().stack?.split(/[\n\r]/);
        // const filteredTrace = traceArray.filter(
        //   (line) => line.includes("/pages/") || line.includes("/components/")
        // );
        // console.log(
        //   `GQL op:${operation.operationName} vars:${JSON.stringify(
        //     operation.variables
        //   )} -${filteredTrace.join("") || " no trace; on server?"}`
        // );
        return forward(operation);
      }),
      new HttpLink({
        uri: process.env.NEXT_PUBLIC_API_URL,
      }),
    ]),
    cache: new InMemoryCache({
      typePolicies: {
        Query: {
          fields: {
            entry: {
              merge(existing = {}, incoming) {
                return { ...existing, ...incoming };
              },
            },
          },
        },
      },
    }),
  });
}

export function initializeApollo(initialState = null) {
  const _apolloClient = apolloClient ?? createApolloClient();

  // If your page has Next.js data fetching methods that use Apollo Client,
  // the initial state gets hydrated here
  if (initialState) {
    // Get existing cache, loaded during client side data fetching
    const existingCache = _apolloClient.extract();

    const data = merge(initialState, existingCache);
    // getStaticProps/getServerSideProps combined with the existing cached data
    _apolloClient.cache.restore(data);
  }

  // For SSG and SSR always create a new Apollo Client
  if (typeof window === "undefined") return _apolloClient;

  // Create the Apollo Client once in the client
  if (!apolloClient) apolloClient = _apolloClient;
  return _apolloClient;
}

export function useApollo(initialState) {
  const store = useMemo(() => initializeApollo(initialState), [initialState]);
  return store;
}
export const mutateAPI = async (mutation: DocumentNode, variables: any) => {
  const _apolloClient = createApolloClient();
  const { data } = await _apolloClient.mutate({
    variables: variables,
    mutation: mutation,
  });

  return data;
};

export default apolloClient;
