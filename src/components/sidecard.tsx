import React, { useId } from "react";
import { useStore } from "@nanostores/react";
import { size, speed } from "./Planetmodel/state";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

export default function Sidecard() {
  const speed$ = useStore(speed);
  const size$ = useStore(size);
  const inputId = useId();

  return (
    <div className=" p-2 grid gap-2">
      <h2 className=" font-poppins text-5xl font-bold">index.</h2>
      <p>
        hello im ikhwan satrio!,just young frontend programer with big ambition!
      </p>
      <div className=" m-2">
        <Label htmlFor={inputId}>speed: {speed$}x</Label>
        <Input
          type="range"
          id={inputId}
          min={0.2}
          max={10}
          value={speed$}
          onChange={(e) => speed.set(Number(e.target.value))}
        />
        <Label htmlFor={inputId}>size: {size$ - 2}x</Label>
        <Input
          type="range"
          id={inputId}
          min={0}
          max={10}
          value={size$}
          onChange={(e) => size.set(Number(e.target.value))}
        />
      </div>
    </div>
  );
}
