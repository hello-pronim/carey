import { initializeApollo } from "@utils/apolloClient";
import { navigationQuery } from "@gql/globalGQL";

export const withGlobalData = (gssp: any) => {
  return async function (context: any) {
    const client = initializeApollo();
    // get serverside data
    const gsspData = await gssp(context);
    const navigation = await client.query({
      query: navigationQuery,
    });
    return {
      ...gsspData,
      props: {
        ...gsspData.props,
        navigation: navigation?.data,
      },
    };
  };
};
