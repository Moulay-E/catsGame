'use client';
import React from 'react';
import { useState } from 'react';
import catSexy from '@/public/assets/character/sexyCat2.jpg';
import Image from 'next/image';

const Counter = () => {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div className="flex flex-col">
      <h2>Point : {count}</h2>
      <button onClick={handleClick}>
        <Image src={catSexy} alt="cat girl sexy" width={200} height={200} />
        Frappe moi fort BB !
      </button>
    </div>
  );
};

export default Counter;
