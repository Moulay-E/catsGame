'use client';
import React, { useContext, useEffect } from 'react';
import { GlobalDataContext } from '../context';
import catSexy from '@/public/assets/character/chatDeNuit.webp';
import Image from 'next/image';

const Counter = () => {
  const { score, setScore } = useContext(GlobalDataContext);

  useEffect(() => {
    console.log(score); // show the value after every render
  }, [score]);
  console.log(score);

  const handleClickscore = () => {
    setScore(score + 1);
  };

  return (
    <div className="flex flex-col h-full">
      <div className="w-full text-center ">
        <h2>Point : {score}</h2>
      </div>
      <button className="h-[80%] " onClick={handleClickscore}>
        <Image
          className="h-[80%] w-full object-cover "
          src={catSexy}
          alt="cat girl sexy"
          width={200}
          height={200}
        />
        Frappe moi pour gagner des point bg supreme !
      </button>
    </div>
  );
};

export default Counter;
