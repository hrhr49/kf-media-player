import {useState, useCallback} from 'react';

const clipValue = (
  value: number,
  [min, max]: [number, number],
) => {
  return Math.min(Math.max(value, min), max);
};

const useClipedValue = (
  initialValue: number,
  [min, max]: [number, number],
) => {
  const [value, setRawValue] = useState(clipValue(initialValue, [min, max]));

  const callbacks = {

    set: useCallback((newValue: number) => {
      setRawValue(clipValue(newValue, [min, max]));
    }, [min, max]),

    up: useCallback((delta: number)  => {
      setRawValue((prev) => clipValue(prev + delta, [min, max]));
    }, [min, max]),

    down: useCallback((delta: number)  => {
      setRawValue((prev) => clipValue(prev - delta, [min, max]));
    }, [min, max]),

    min: useCallback(() => {
      setRawValue(min);
    }, [min]),

    max: useCallback(() => {
      setRawValue(max);
    }, [max]),

  } as const;

  return [value, callbacks] as const;
};

export {
  useClipedValue,
};
