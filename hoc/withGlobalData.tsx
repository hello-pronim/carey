import { initializeApollo } from "@utils/apolloClient";
import { globalQuery } from "@gql/globalGQL";

export const withGlobalData = (gssp: any) => {
  return async function (context: any) {
    const client = initializeApollo();
    // get serverside data
    const gsspData = await gssp(context);
    const global = await client.query({
      query: globalQuery,
    });

    let sitemap = [];
    for (let i: number = 1; i <= 6; i++) {
      if (global?.data?.[`sitemapColumn${i}`]?.length > 0) {
        sitemap.push(global?.data?.[`sitemapColumn${i}`][0]);
      }
    }
    return {
      ...gsspData,
      props: {
        ...gsspData.props,
        navigation: global?.data.mainNav,
        headerNav: global?.data.headerNav,
        headerGlobals: global?.data.headerGlobals,
        footerGlobals: global?.data.footerGlobals,
        footerNav: global?.data.footerNav,
        applyNow: global?.data.applyNow,
        sitemap,
      },
    };
  };
};
