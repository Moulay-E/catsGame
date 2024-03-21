'use Client';
import { GlobalDataContext } from '@/app/context';
import React, { useState, useEffect, useContext } from 'react';

const CounterCharacter = ({ bonusId, bonusCost, bonus, bonusCount }) => {
  const { score, setScore } = useContext(GlobalDataContext);
  const [bonusActif, setBonusActif] = useState([]);

  const buyBonus = (event) => {
    event.stopPropagation();
    if (score >= bonusCost) {
      setScore((prevScore) => prevScore - bonusCost);
      const existingBonusIndex = bonusActif.findIndex(
        (item) => item.bonusId === bonusId,
      );
      console.log(existingBonusIndex, 'bonusIndex');

      if (existingBonusIndex > -1) {
        console.log(bonusActif, 'bonus Actif');
        const newBonusActif = [...bonusActif];
        newBonusActif[existingBonusIndex] = {
          ...newBonusActif[existingBonusIndex],
          count: newBonusActif[existingBonusIndex].count + 1,
        };
        console.log(newBonusActif[existingBonusIndex].count, 'count');
        return setBonusActif(newBonusActif);
      } else {
        return setBonusActif([
          ...bonusActif,
          { bonusId, value: bonus, count: bonusCount },
        ]);
      }
    } else {
      alert("Vous n'avez pas suffisament d'argent");
    }
  };

  const updateScore = () => {
    bonusActif.forEach((obj) => {
      setScore((prevScore) => prevScore + obj.value * obj.count);
    });
  };

  useEffect(() => {
    const timer = setInterval(() => {
      updateScore();
    }, 1000);

    return () => clearInterval(timer);
  }, [bonusActif]);

  return <button onClick={(event) => buyBonus(event)}> YYY </button>;
};

export default CounterCharacter;
