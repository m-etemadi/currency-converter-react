import { getCurrentDate } from './getCurrentDate';

export default function Summary({ amount, from, to, converted }) {
  function fixedCurrency(data) {
    const maxDigit = {
      maximumFractionDigits: 0,
    };

    return data >= 1000 ? data.toLocaleString(undefined, maxDigit) : data;
  }

  return (
    <div className="summary">
      {amount < 1 ? (
        <p className="error">Please enter an amount greater than 0</p>
      ) : (
        <>
          <p className="from-amount">
            {fixedCurrency(amount)} {from} =
          </p>
          <p className="to-amount">
            {fixedCurrency(converted)} {to}
          </p>
        </>
      )}

      {amount > 0 && <p className="date">Last updated {getCurrentDate()}</p>}
    </div>
  );
}
