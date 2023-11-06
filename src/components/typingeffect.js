import { useEffect, useState } from "react";

export function useTypingEffect(textToType, interKeyStrokeDurationInMs) {
  const [currentPosition, setCurrentPosition] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentPosition((value) => value + 1);
    }, interKeyStrokeDurationInMs);
    return () => {
      clearInterval(intervalId);
    };
  }, []);
}
