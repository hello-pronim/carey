const getPaths = (object, slug) => {
  if (object.url === slug) return [object.url];
  else if (object.subItems || Array.isArray(object)) {
    let subItems = Array.isArray(object) ? object : object.subItems;
    for (let child of subItems) {
      let result = getPaths(child, slug);
      if (result) {
        if (object.url) result.unshift(object.url);
        return result;
      }
    }
  }
};

const getFullPath = (object, slug) => {
  const paths = getPaths(object, slug);
  return paths.join("/");
};

export default getFullPath;
