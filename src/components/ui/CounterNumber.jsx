import { useEffect, useState } from "react";

const CountUpNumber = ({ end = 1000, duration = 2000 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const incrementTime = 20;
    const step = Math.ceil(end / (duration / incrementTime));

    const timer = setInterval(() => {
      start += step;

      if (start >= end) {
        start = end;
        clearInterval(timer);
      }

      setCount(start);
    }, incrementTime);

    return () => clearInterval(timer);
  }, [end, duration]);

  return <span>{count}</span>;
};

export default CountUpNumber;