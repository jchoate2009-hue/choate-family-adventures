"use client";

import { useEffect, useState } from "react";

type CountdownProps = {
  targetDate: string;
};

function getCountdown(targetDate: string) {
  const target = new Date(targetDate).getTime();
  const now = Date.now();
  const diff = target - now;

  if (diff <= 0) {
    return "Adventure in progress!";
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);

  return `${days} days • ${hours} hrs • ${minutes} min until check-in`;
}

export function Countdown({ targetDate }: CountdownProps) {
  const [countdown, setCountdown] = useState(() => getCountdown(targetDate));

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(getCountdown(targetDate));
    }, 60000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="mt-6 rounded-full bg-white/10 px-4 py-3 text-sm font-bold">
      {countdown}
    </div>
  );
}