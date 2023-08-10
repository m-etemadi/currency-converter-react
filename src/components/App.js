import { useEffect, useReducer } from 'react';
import { fixCurrency } from '../helper';
import Container from './Container';
import Loader from './Loader';
import ErrorMessage from './ErrorMessage';
import Form from './Form/Form';
import FormInput from './Form/FormInput';
import FromField from './Form/FromField';
import ToField from './Form/ToField';
import Summary from './Summary';

const initialState = {
  amount: 1,
  from: 'USD',
  to: 'EUR',
  convertedResult: null,
  status: '',
  error: '',
};

function reducer(state, action) {
  switch (action.type) {
    case 'loading':
      return { ...state, status: 'loading' };
    case 'error':
      return { ...state, status: 'error', error: action.payload };
    case 'dataReceived':
      return { ...state, status: 'ready', convertedResult: action.payload };
    case 'setAmount':
      return { ...state, amount: action.payload };
    case 'setFrom':
      return { ...state, from: action.payload };
    case 'setTo':
      return { ...state, to: action.payload };
    default:
      throw new Error('Unknown case!');
  }
}

export default function App() {
  const [{ amount, from, to, convertedResult, status, error }, dispatch] =
    useReducer(reducer, initialState);

  useEffect(
    function () {
      async function convert() {
        try {
          dispatch({ type: 'loading' });
          const res = await fetch(
            `https://api.frankfurter.app/latest?amount=${amount}&from=${from}&to=${to}`
          );

          if (!res.ok) throw new Error(`Something went wrong!`);

          const data = await res.json();
          dispatch({ type: 'dataReceived', payload: data.rates[to] });
        } catch (err) {
          dispatch({ type: 'error', payload: err.message });
        }
      }
      if (amount < 1)
        return dispatch({
          type: 'error',
          payload: 'Please enter an amount greater than 0',
        });

      if (from === to)
        return dispatch({ type: 'dataReceived', payload: amount });
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

  return (
    <Container>
      <Form>
        <FormInput amount={amount} dispatch={dispatch} />
        <FromField from={from} dispatch={dispatch} />
        <ToField to={to} dispatch={dispatch} />
      </Form>
      {status === 'loading' && <Loader />}
      {status === 'error' && <ErrorMessage message={error} />}
      {status === 'ready' && (
        <Summary
          amount={amount}
          from={from}
          to={to}
          convertedResult={convertedResult}
        />
      )}
    </Container>
  );
}
