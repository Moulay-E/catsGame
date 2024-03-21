'use client';
import Image from 'next/image';
import React, { useContext, useEffect, useState } from 'react';
import { GlobalDataContext } from '../../context';
import CounterCharacter from './CounterCharater';

function CharacterMap({ data }) {
  const { score, setScore } = useContext(GlobalDataContext);

  return (
    <div className="h-[500px] bg-yellow-500">
      <h2>Ton equipe</h2>
      <div></div>
      <div className=" grid grid-cols-3">
        {data.personnages.map((personnage) => (
          <div
            key={personnage.id}
            className={`${
              score >= personnage.cost ? 'bg-green-200' : 'bg-blue-200'
            }`}
          >
            <h3>{personnage.name}</h3>
            <Image
              src={personnage.src}
              alt={personnage.alt}
              width={48}
              height={48}
            />
            <CounterCharacter
              bonusId={personnage.id}
              bonusCost={personnage.cost}
              bonus={personnage.bonus}
              bonusCount={personnage.count}
            ></CounterCharacter>
            <p>{personnage.cost}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CharacterMap;
