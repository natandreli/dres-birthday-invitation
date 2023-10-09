"use client";

import React from "react";
import { useState } from "react";

export default function Loading() {
  const [color, setColor] = useState(getRandomColor());

  function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  return (
    <div className="bg-home flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-semibold mb-4 text-center" style={{ color }}>
        Loading...
      </h1>
    </div>
  );
}

export async function getServerSideProps() {
  const color = getRandomColor();
  return {
    props: {
      color,
    },
  };
}
