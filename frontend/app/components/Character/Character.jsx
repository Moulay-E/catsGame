import Image from 'next/image';
import React from 'react';
import CharacterMap from './CharacterMap';

async function Character() {
  const response = await fetch(process.env.URL + '/data/characterData.json');
  const data = await response.json();
  // console.log(data, 'hello');

  return <CharacterMap data={data} />;
}

export default Character;
