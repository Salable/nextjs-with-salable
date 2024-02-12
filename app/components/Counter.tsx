"use client";
import { useState } from "react";

export default function Counter() {
  const [counter, setCounter] = useState(0);
  const buttonStyles = "rounded-lg h-12 w-12 bg-blue-500 text-white font-bold";
  return (
    <div className="text-2xl space-x-4">
      <button onClick={() => setCounter(counter - 1)} className={buttonStyles}>
        -
      </button>
      <span className="tabular-nums">{counter}</span>
      <button onClick={() => setCounter(counter + 1)} className={buttonStyles}>
        +
      </button>
    </div>
  );
}
