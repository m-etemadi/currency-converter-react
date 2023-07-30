import { fixCurrency, getCurrentDateTime } from './helper';

export default function Summary({ amount, from, to, converted }) {
  return (
    <div className="summary">
      {amount < 1 ? (
        <p className="error">Please enter an amount greater than 0</p>
      ) : (
        <>
          <p className="from-amount">
            {fixCurrency(amount)} {from} =
          </p>
          <p className="to-amount">
            {fixCurrency(converted)} {to}
          </p>
        </>
      )}

      {amount > 0 && (
        <p className="date">Last updated {getCurrentDateTime()}</p>
      )}
    </div>
  );
}
