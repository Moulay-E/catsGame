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
    <div className="flex flex-col h-full">
      <div className="w-full text-center ">
        <h2>Point : {count}</h2>
      </div>
      <button className="h-[90%] " onClick={handleClick}>
        <Image
          className="h-[80%] w-full object-cover "
          src={catSexy}
          alt="cat girl sexy"
          width={200}
          height={200}
        />
        Frappe moi fort BB !
      </button>
    </div>
  );
};

export default Counter;
