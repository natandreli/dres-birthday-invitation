"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const [buttonNoStyle, setButtonNoStyle] = useState({});

  const handleNoClick = () => {
    const randomX = Math.random() * (window.innerWidth - 200);
    const randomY = Math.random() * (window.innerHeight - 200);
    setButtonNoStyle({
      position: "absolute",
      left: `${randomX}px`,
      top: `${randomY}px`,
      transition: "left 0.3s, top 0.3s",
    });
  };

  return (
    <div className="bg-home flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-semibold mb-4 text-center">
        ¿Aceptas ir a mi cumpleaños?
      </h1>
      <div className="button-container flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 items-center">
        <button
          id="yes-button"
          className="text-lg bg-green-600 text-white px-4 py-2 rounded hover:bg-green-500 transition"
          onClick={() => router.push("/invitation")}
        >
          Sí, me encantaría
        </button>
        <button
          id="no-button"
          className="text-lg bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          onMouseOver={handleNoClick}
          onClick={handleNoClick}
          style={buttonNoStyle}
        >
          No
        </button>
      </div>
    </div>
  );
}
