import { useEffect, useState } from "react";

const Route = ({ route, children }) => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const onUrlChange = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener("popstate", onUrlChange);

    return () => {
      window.removeEventListener("popstate", onUrlChange);
    };
  }, []);

  return currentPath === route ? children : null;
};
export default Route;
