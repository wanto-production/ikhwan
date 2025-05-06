import type { ReactNode } from "react";

type ForProps<T> = {
  each: T[];
  children: (item: T, index: number) => ReactNode;
};

export function For<T>({ each, children }: ForProps<T>) {
  return (
    <>
      {each.map((item, index) => children(item, index))}
    </>
  );
}

