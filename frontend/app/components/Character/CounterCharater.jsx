'use Client';
import { GlobalDataContext } from '@/app/context';
import React, { useState, useEffect, useContext } from 'react';

const CounterCharater = ({ bonusId, bonusCost, bonus }) => {
  //   const [characterBonus, setCharacterBonus] = useState([]);
  //   const mappedData = data.personnages.map(({ id, cost, bonus }) => ({
  //     id,
  //     cost,
  //     bonus,
  //   }));
  //   setCharacterBonus(mappedData);

  const { score, setScore } = useContext(GlobalDataContext);
  const [bonusActif, setBonusActif] = useState({});

  const buyBonus = (bonusId, bonusCost, bonus) => {
    if (score >= bonusCost) {
      setScore(score - bonusCost);
      console.log(bonusId, bonusCost);

      setBonusActif({ ...bonusActif, [bonusId]: bonus });
      console.log(bonusActif);
    } else {
      alert("Vous n'avez pas suffisament d'argent");
    }
  };

  const getBonusValue = (bonusId) => {
    if (bonusActif[bonusId] !== undefined) {
      return bonusActif[bonusId];
    } else {
      console.error(`Bonus introuvable : ${bonusId}`);
      return 0; // Valeur par défaut si le bonus n'est pas trouvé
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      //   for (const bonusId of bonusActif) {
      //     const bonusValue = getBonusValue(bonusId);
      //     setScore(score + bonusValue);
      //   }
      Object.keys(bonusActif).forEach((bonusId) => {
        setScore(score + bonus);
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [bonusActif, setScore]);

  return <button onClick={() => buyBonus(bonusId, bonusCost)}> YYY</button>;
};

export default CounterCharater;
