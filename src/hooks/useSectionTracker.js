import { useEffect, useRef } from "react";
import { trackSection } from "../utils/analytics";

const useSectionTracker = (sectionName) => {
  const tracked = useRef(false);

  useEffect(() => {
    if (!tracked.current) {
      trackSection(sectionName);
      tracked.current = true;
    }
  }, [sectionName]);

  return null; 
};

export default useSectionTracker;
