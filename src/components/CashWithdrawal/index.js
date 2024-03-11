import React, { useState } from 'react';
import DenominationItem from '../DenominationItem';

const CashWithdrawal = ({ denominationsList }) => {
  const [balance, setBalance] = useState(2000);

  const handleWithdrawal = (amount) => {
    setBalance(balance - amount);
  };

  return (
    <div className="cash-withdrawal">
      <p>Your Balance: {balance}</p>
      <p>Withdraw</p>
      <p>CHOOSE SUM (IN RUPEES)</p>
      <ul>
        {denominationsList.map((denomination) => (
          <li key={denomination.id}>
            <DenominationItem
              value={denomination.value}
              onClick={() => handleWithdrawal(denomination.value)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CashWithdrawal;
