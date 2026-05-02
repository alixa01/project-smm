import { useCallback, useState } from "react";

export function useFaqToggle(initialOpen: number[] = []) {
  const [openIndexes, setOpenIndexes] = useState<number[]>(initialOpen);

  const toggleIndex = useCallback((index: number) => {
    setOpenIndexes((current) =>
      current.includes(index)
        ? current.filter((item) => item !== index)
        : [...current, index],
    );
  }, []);

  return { openIndexes, toggleIndex };
}
