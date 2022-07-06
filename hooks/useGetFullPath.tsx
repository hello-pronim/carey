import { useMemo } from "react";

// get the tree path in the nested object array
// const getPaths = (object, slug) => {
//   if (object.url === slug) return [object.url];
//   else if (object.subItems || Array.isArray(object)) {
//     let subItems = Array.isArray(object) ? object : object.subItems;
//     for (let child of subItems) {
//       let result = getPaths(child, slug);
//       if (result) {
//         if (object.url) result.unshift(object.url);
//         return result;
//       }
//     }
//   }
// };

export const useGetFullPath = (page) => {
  const fullPath = useMemo(() => {
    const pageSlug = page.slug;
    const parentSlug = page?.ancestors?.map((el) => el.slug).join("/");
    return `/${parentSlug}/${pageSlug}`;
  }, [page]);

  return fullPath;
};
