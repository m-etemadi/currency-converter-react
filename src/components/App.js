import { useEffect, useState } from 'react';
import Loader from './Loader';
import ErrorMessage from './ErrorMessage';
import Form from './Form';
import Summary from './Summary';

export default function App() {
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
    document.title = `${amount} ${from} to ${to}`;

    return function () {
      document.title = 'Currency converter';
    };
  });

  return (
    <div className="container">
      <Form
        amount={amount}
        setAmount={setAmount}
        setFrom={setFrom}
        setTo={setTo}
        from={from}
        to={to}
      />

      {isLoading && <Loader />}

      {error && <ErrorMessage message={error} />}

      {!isLoading && !error && (
        <Summary amount={amount} from={from} to={to} converted={converted} />
      )}
    </div>
  );
}
