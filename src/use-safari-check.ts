import { useEffect, useState } from "react";

function useSafariCheck() {
  const [isSafari, setIsSafari] = useState(false);

  useEffect(() => {
    setIsSafari(/^((?!chrome|android).)*safari/i.test(navigator.userAgent));
  }, []);

  return isSafari;
}

export default useSafariCheck;

