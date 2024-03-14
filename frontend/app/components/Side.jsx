'use client';
import React from 'react';
import Counter from './Counter';

const Side = () => {
  return (
    <div className=" h-[300px] flex flex-col bg-purple-500">
      <h2>side</h2>
      <Counter />
    </div>
  );
};

export default Side;
