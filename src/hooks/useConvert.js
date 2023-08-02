import { useEffect, useState } from 'react';
import { fixCurrency } from '../helper';

export function useConvert() {
  const [amount, setAmount] = useState(1);
  const [from, setFrom] = useState('USD');
  const [to, setTo] = useState('EUR');
  const [converted, setConverted] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(
    function () {
      async function convert() {
        try {
          setIsLoading(true);
          setError('');

          const res = await fetch(
            `https://api.frankfurter.app/latest?amount=${amount}&from=${from}&to=${to}`
          );

          if (!res.ok) throw new Error(`Something went wrong!`);

          const data = await res.json();
          setConverted(data.rates[to]);
        } catch (err) {
          setError(err.message);
        } finally {
          setIsLoading(false);
        }
      }

      if (!amount) return;
      if (from === to) return setConverted(amount);
      convert();
    },
    [amount, from, to]
  );

  useEffect(function () {
    document.title = `${fixCurrency(amount)} ${from} to ${to}`;

    return function () {
      document.title = 'Currency converter';
    };
  });

  return {
    amount,
    from,
    to,
    setAmount,
    setFrom,
    setTo,
    converted,
    isLoading,
    error,
  };
}
