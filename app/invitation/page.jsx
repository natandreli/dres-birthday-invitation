"use client";

import React, { useState, useEffect } from "react";
import Confetti from "react-confetti";

export default function Invitation() {
  const [backgroundColor, setBackgroundColor] = useState(getRandomColor());
  const [confetti, setConfetti] = useState(false);

  useEffect(() => {
    setConfetti(true);
    const intervalId = setInterval(() => {
      setBackgroundColor(getRandomColor());
    }, 1000);

    window.addEventListener("popstate", () => {
      window.location.reload();
    });

    return () => {
      clearInterval(intervalId);

      window.removeEventListener("popstate", () => {
        window.location.reload();
      });
    };
  }, []);

  function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  return (
    <div
      id="invitation-page"
      className="min-h-screen flex items-center justify-center"
    >
      {confetti && (
        <Confetti
          width={window.innerWidth}
          height={window.innerHeight}
          numberOfPieces={300}
        />
      )}
      <div
        id="invitation-card-container"
        className="w-96 h-120 bg-blue-200 p-6 rounded-lg"
        style={{ backgroundColor }}
      >
        <div className="bg-card p-4 rounded-lg shadow-md text-black">
          <h1 className="text-4xl font-semibold mb-4 text-center">
            ¡Sabía que no podrías negarte!
          </h1>
          <p className="text-lg text-center">
            <strong>Lugar:</strong> Cervecería Lardi Brewing, Bello Cl 37 #52-37
          </p>
          <br />
          <p className="text-lg text-center">
            <strong>Día:</strong> Viernes, 13 de octubre
          </p>
          <br />
          <p className="text-lg text-center">
            <strong>Hora:</strong> 7:00 pm
          </p>
          <br />
          <p className="text-lg text-center">
            ¡No olvides mi regalo! (Es broma, pero si quieres no es broma)
          </p>
          <p className="text-lg text-center mt-4 text-sm">
            <em>
              *Al presionar <strong>Sí, me encantaría</strong> has vendido tu
              alma a este plan
            </em>
          </p>
        </div>
      </div>
    </div>
  );
}
