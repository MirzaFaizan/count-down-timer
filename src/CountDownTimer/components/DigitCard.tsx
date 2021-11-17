import React from 'react';

interface IDigitCardProps {
  title: 'Seconds' | 'Minutes' | 'Hours';
  digits: number;
}

const DigitsCard = ({ title, digits }: IDigitCardProps) => {
  return (
    <div>
      <h5>{digits}</h5>
      <h6>{title}</h6>
    </div>
  );
};

export default DigitsCard;
