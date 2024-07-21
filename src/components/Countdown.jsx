import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

const CountdownContainer = styled.div`
  text-align: center;
  margin-top: 2rem;

  h2 {
    color: ${props => props.theme.colors.accent};
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }

  .countdown {
    display: flex;
    justify-content: center;
    gap: 1rem;

    .time-box {
      background: ${props => props.theme.colors.cardBackground};
      padding: 1rem;
      border-radius: 8px;
      box-shadow: 0 2px 4px ${props => props.theme.colors.cardShadow};
      min-width: 80px;
    }

    .time {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 2rem;
      color: ${props => props.theme.colors.secondary};
    }

    .label {
      font-size: 1rem;
      color: ${props => props.theme.colors.accent};
    }
  }
`;

const timeVariants = {
  initial: { y: -20, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  exit: { y: 20, opacity: 0 }
};

const calculateTimeLeft = () => {
  const difference = +new Date('2024-08-01') - +new Date();
  let timeLeft = {};

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60)
    };
  }

  return timeLeft;
};

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  }, []); // Added dependency array to prevent continuous re-renders

  const formatTime = time => String(time).padStart(2, '0');

  return (
    <CountdownContainer>
      <h2>Event Starts In:</h2>
      <div className="countdown">
        <AnimatePresence>
          {Object.entries(timeLeft).map(([unit, value]) => (
            <div key={unit} className="time-box">
              <motion.div
                className="time"
                key={value} // Ensures each motion.div is unique
                variants={timeVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.3 }}
              >
                {formatTime(value) || '00'}
              </motion.div>
              <div className="label">{unit.charAt(0).toUpperCase() + unit.slice(1)}</div>
            </div>
          ))}
        </AnimatePresence>
      </div>
    </CountdownContainer>
  );
};

export default Countdown;
