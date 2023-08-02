import Container from './Container';
import Loader from './Loader';
import ErrorMessage from './ErrorMessage';
import Form from './Form';
import Summary from './Summary';
import { useConvert } from '../hooks/useConvert';

export default function App() {
  const {
    amount,
    from,
    to,
    setAmount,
    setFrom,
    setTo,
    converted,
    isLoading,
    error,
  } = useConvert();

  return (
    <Container>
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
    </Container>
  );
}
