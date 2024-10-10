import { useEffect, useState } from "react";
import { differenceInMilliseconds, parseISO } from "date-fns";

export const useCountProgress = (due: string) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const dueDate = parseISO(due);

    const total = differenceInMilliseconds(dueDate, new Date());

    const interval = setInterval(() => {
      const now = new Date();
      const diff = differenceInMilliseconds(dueDate, now);

      if (diff <= 0) {
        setProgress(0);
        clearInterval(interval);
        return;
      }

      setProgress((diff / total) * 100);
    }, 1000);

    return () => clearInterval(interval);
  }, [due]);

  return progress;
};
