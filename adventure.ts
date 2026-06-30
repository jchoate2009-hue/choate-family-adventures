"use client";

import { useEffect, useState } from 'react';

type CountdownProps = {
  targetDate: string;
};

function calculate(targetDate: string) {
  const target = new Date(targetDate).getTime();
  const now = Date.now();
  const diff = target - now;

  if (diff <= 0) {
    return 'Adventure in progress!';
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);

  return `${days} days • ${hours} hrs • ${minutes} min until check-in`;
}

export function Countdown({ targetDate }: CountdownProps) {
  const [value, setValue] = useState(() => calculate(targetDate));

  useEffect(() => {
    const interval = setInterval(() => setValue(calculate(targetDate)), 60000);
    return () => clearInterval(interval);
  }, [targetDate]);

  return <div className="countdown">{value}</div>;
}
