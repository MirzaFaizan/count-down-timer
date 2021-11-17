import React, { FC, ReactElement } from 'react';
import DigitCard from './DigitCard';

const CountDownTimer: FC = (): ReactElement => {
  return (
    <div>
      <DigitCard digits={1} title={'Hours'} />
      <DigitCard digits={1} title={'Minutes'} />
      <DigitCard digits={1} title={'Seconds'} />
    </div>
  );
};

export default CountDownTimer;
