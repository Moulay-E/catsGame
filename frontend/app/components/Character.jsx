import React from 'react';
import { GetStaticProps } from 'next';
async function getStaticProps() {
  const response = await fetch('/data/characterData.json');
  const data = await response.json();

  return {
    props: {
      characterData: data,
    },
  };
}

async function Character({ characterData }) {
  return (
    <div className="h-[500px] bg-yellow-500">
      <h2>Ton equipe</h2>
      <div></div>
    </div>
  );
}

export default Character;
