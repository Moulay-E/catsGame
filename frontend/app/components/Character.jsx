import Image from 'next/image';
import React from 'react';

async function Character() {
  const response = await fetch(process.env.URL + '/data/characterData.json');
  const data = await response.json();
  // console.log(data, 'hello');

  return (
    <div className="h-[500px] bg-yellow-500">
      <h2>Ton equipe</h2>
      <div></div>
      <div className=" grid grid-cols-3">
        {data.personnages.map((personnage) => (
          <div key={personnage.id}>
            <h3>{personnage.name}</h3>
            <Image
              src={personnage.src}
              alt={personnage.alt}
              width={48}
              height={48}
            />
            <p>{personnage.cost}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Character;
