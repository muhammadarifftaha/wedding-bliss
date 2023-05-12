import { intervalToDuration, set } from "date-fns";
import React, { useEffect, useState } from "react";

export default function useCountdown(target: Date) {
  const [duration, setDuration] = useState({});

  useEffect(() => {
    const interval = setInterval(() => {
      const duration = intervalToDuration({ start: new Date(), end: target });
      delete duration.years;
      setDuration(duration);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return duration;
}
