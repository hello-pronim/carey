import { useMemo } from "react";

const useFormatUrl = (href) => {
  const hrefValue = useMemo(() => {
    if (href && !href.includes("http") && !href.startsWith("/"))
      return `/${href}`;
    if (href && href.includes("http")) return href;
  }, [href]);

  return hrefValue;
};

export default useFormatUrl;
