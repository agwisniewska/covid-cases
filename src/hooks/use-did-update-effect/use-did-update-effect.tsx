import {useRef, useEffect} from 'react';

type Fn = (param: unknown) => void

export const useDidUpdateEffect = (fn: Fn, dependency: unknown) => {
  const didMountRef = useRef(false);

  useEffect(() => {
    if (didMountRef.current) {
      fn(dependency);
    }
    didMountRef.current = true;
  }, [dependency]);
}