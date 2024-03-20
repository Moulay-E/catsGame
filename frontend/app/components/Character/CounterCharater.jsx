'use Client';
import { GlobalDataContext } from '@/app/context';
import React, { useState, useEffect, useContext } from 'react';

const CounterCharacter = ({ bonusId, bonusCost, bonus }) => {
  const { score, setScore } = useContext(GlobalDataContext);
  const [bonusActif, setBonusActif] = useState({});

  const buyBonus = () => {
    if (score >= bonusCost) {
      console.log(bonusId, bonusCost, bonus, 'list');
      setScore((prevScore) => prevScore - bonusCost);

      setBonusActif({ ...bonusActif, [bonusId]: bonus });
      console.log(bonusActif, 'ghell');
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
        // setScore(score + bonus);
        console.log(bonusId);
        console.log(bonusActif, 'bonus tabl');
        setScore((prevScore) => prevScore + bonusActif[bonusId]);
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [bonusActif, setScore]);

  return <button onClick={() => buyBonus()}> YYY</button>;
};

export default CounterCharacter;
